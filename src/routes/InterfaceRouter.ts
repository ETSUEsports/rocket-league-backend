import { Router } from 'express';
export const InterfaceRoutes = Router();

InterfaceRoutes.get('/api/v1/interfaces/vmix', (req, res) => {
    res.send(req.app.interfaceController.vMix());
});