import WebSocket from 'ws';
import http from 'http';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { routes } from './routes';
import bodyParser from 'body-parser';


const app: Application = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const mongoDb = "mongodb://127.0.0.1/esports  ";

// body-parser
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// routes
app.use('/', routes);

mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error"));

wss.on('connection', (ws: WebSocket) => {

  //connection is up, let's add a simple simple event
  ws.on('message', (message: string) => {
      //log the received message and send it back to the client
      console.log('received: %s', message);
      ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection    
  ws.send('CONNECTED');
});

//start our server
server.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});
