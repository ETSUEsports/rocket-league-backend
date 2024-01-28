import { Router } from 'express';
export const InterfaceRoutes = Router();

InterfaceRoutes.get('/interfaces/0/vmix', (req, res) => {
    res.send(req.app.interfaceController0.vMix());
});

InterfaceRoutes.get('/interfaces/1/vmix', (req, res) => {
    res.send(req.app.interfaceController1.vMix());
});
