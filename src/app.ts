import WebSocket from 'ws';
import http from 'http';
import express from 'express';

const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });


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