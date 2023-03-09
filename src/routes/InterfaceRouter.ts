import { Router } from 'express';
export const InterfaceRoutes = Router();

InterfaceRoutes.get('/interfaces/vmix', (req, res) => {
    res.send(req.app.interfaceController.vMix());
});