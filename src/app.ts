import WebSocket from 'ws';
import http from 'http';
import cors from 'cors';
import express, { Application } from 'express';
import { routes } from './routes';
import bodyParser from 'body-parser';
import path from 'path';
import { TeamController } from './controllers/TeamController';
import { WSSBcast } from './structures/WSBcast';
import { SeriesController } from './controllers/SeriesController';
import { InterfaceController } from './controllers/InterfaceController';
import { CasterController } from './controllers/CasterController';
declare global {
  namespace Express {
    interface Application {
      teamController: TeamController,
      seriesController: SeriesController,
      interfaceController: InterfaceController,
      casterController: CasterController,
      webSocketServer: WSSBcast
    }
  }
}

const app: Application = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WSSBcast({ server });
const teamController = new TeamController(wss);
const seriesController = new SeriesController(wss);
const casterController = new CasterController(wss);
const interfaceController = new InterfaceController(teamController.leftTeam, teamController.rightTeam, casterController.leftCaster, casterController.rightCaster);
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.teamController = teamController;
app.seriesController = seriesController;
app.webSocketServer = wss;
app.interfaceController = interfaceController;
app.casterController = casterController;
app.use('/static', express.static(path.join(__dirname, '..', 'public')))

// routes
app.use('/', routes);
wss.on('connection', (ws: WebSocket) => {
  const message = JSON.stringify({ "event": "control:connected", "data": "OK" });
  ws.send(message);
  const message2 = JSON.stringify({ "event": "control:initailize", "teams": teamController.getTeams(), "series": seriesController.getSeries() });
  ws.send(message2);
});

//start our server
server.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});
