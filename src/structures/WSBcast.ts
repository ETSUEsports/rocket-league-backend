import WebSocket from 'ws';

export class WSSBcast extends WebSocket.Server {
    broadcast(message: string) {
        this.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }
}