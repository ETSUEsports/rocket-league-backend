import WebSocket from 'ws';
import http from 'http';
import express, { Application } from 'express';
import { routes } from './routes';
import bodyParser from 'body-parser';

import { TeamController } from './controllers/TeamController';
import { WSSBcast } from './structures/WSBcast';
declare global {
  namespace Express {
    interface Application {
      teamController: TeamController,
      webSocketServer: WSSBcast
    }
  }
}


const app: Application = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WSSBcast({ server });
const teamController = new TeamController(wss);
// body-parser
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.teamController = teamController;
app.webSocketServer = wss;
// routes
app.use('/', routes);
wss.on('connection', (ws: WebSocket) => {
  const message = JSON.stringify({"event": "control:connected", "data": "OK"});
  ws.send(message);
  const message2 = JSON.stringify({"event": "control:initailize", "teams": teamController.getTeams()});
  ws.send(message2);
});

//start our server
server.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});
