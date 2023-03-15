import * as dotenv from 'dotenv';
dotenv.config();
import WebSocket from 'ws';
import http from 'http';
import cors from 'cors';
import express, { Application } from 'express';
import fileUpload from 'express-fileupload';
import { routes } from './routes';
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import DiscordStrategy from 'passport-discord';
import { TeamController } from './controllers/TeamController';
import { WSSBcast } from './structures/WSBcast';
import { SeriesController } from './controllers/SeriesController';
import { InterfaceController } from './controllers/InterfaceController';
import { CasterController } from './controllers/CasterController';
import fs from 'fs';
declare global {
  namespace Express {
    interface Application {
      teamController: TeamController,
      seriesController: SeriesController,
      interfaceController: InterfaceController,
      casterController: CasterController,
      webSocketServer: WSSBcast,
    }
  }
}
// make directory if not exists public
const dir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const app: Application = express();
const port = 3000;
const server = http.createServer(app);
switch(process.env.NODE_ENV) {
  case 'production':
    console.log("Running in production mode")
    app.use(cors({
      origin: 'https://etsuesports.ryois.net',
      credentials: true,
    }));
    break;
  case 'development':
    console.log("Running in development mode")
    app.use(cors({
      origin: 'http://localhost:8080',
      credentials: true,
    }));
    break;
  default:
    console.log("Running in development mode")
    app.use(cors({
      origin: 'http://localhost:8080',
      credentials: true,
    }));
    break;
}
const wss = new WSSBcast({ server });
const teamController = new TeamController(wss);
const seriesController = new SeriesController(wss);
const casterController = new CasterController(wss);
const interfaceController = new InterfaceController(teamController.leftTeam, teamController.rightTeam, casterController.leftCaster, casterController.rightCaster);
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(fileUpload());
app.teamController = teamController;
app.seriesController = seriesController;
app.webSocketServer = wss;
app.interfaceController = interfaceController;
app.casterController = casterController;
app.use('/static', express.static(path.join(__dirname, '..', 'public')))
app.use(cookieParser());
app.use(require('express-session')({ secret: 'XU6Vw#3Qu5wSJ!$W', resave: true, saveUninitialized: true, expires: new Date(Date.now() + (30 * 86400 * 1000))}));
app.use(passport.initialize()); 
app.use(passport.session());
const scopes = ['identify', 'email', 'guilds', 'guilds.join'];
console.log(`Discord Client ID: ${process.env.DISCORD_CLIENT_ID} | Callback URL: ${process.env.DISCORD_CALLBACK_URL} | Required Guild: ${process.env.DISCORD_GUILD_ID}`)
passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: process.env.DISCORD_CALLBACK_URL,
  scope: scopes
},
function(accessToken, refreshToken, profile, cb) {
  if(profile.guilds.find((guild: any) => guild.id === process.env.DISCORD_GUILD_ID) === undefined) {
    console.log("User is not in the server");
    return cb(null, false);
  } else {
    return cb(null, profile);
  }
}));
passport.serializeUser(function(user, done) {
  done(null, { id: user.id, username: user.username, discriminator: user.discriminator });
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// routes
app.use('/api/v1', routes);

// express error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

wss.on('connection', (ws: WebSocket) => {
  const message = JSON.stringify({ "event": "control:connected", "data": "OK" });
  ws.send(message);
  const message2 = JSON.stringify({ "event": "control:initailize", "teams": teamController.getTeams(), "series": seriesController.getSeries() });
  ws.send(message2);

  ws.on('message', (message: any) => {
    const messageObj = JSON.parse(message);
    switch (messageObj.action) {
      case 'control:new_client':
        const response = JSON.stringify({ "event": "broadcast:events", "action": "new_client", "data": messageObj.data });
        wss.broadcast(response);
        break;
      case 'control:reload':
        const response2 = JSON.stringify({ "event": "broadcast:control", "action": "reload_overlay" });
        wss.broadcast(response2);
        break;
      case 'control:reset':
        const response3 = JSON.stringify({ "event": "broadcast:control", "action": "reset_states" });
        wss.broadcast(response3);
        break;
    }
  });


});

//start our server
server.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});
