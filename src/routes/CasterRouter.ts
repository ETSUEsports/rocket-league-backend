import { Router } from 'express';
import discordAuth from '../auth';
export const CasterRoutes = Router();

CasterRoutes.get('/casters', (req, res) => {
    res.send(req.app.casterController.getCasters());
});

CasterRoutes.get('/casters/left', (req, res) => {
    res.send(req.app.casterController.leftCaster);
});

CasterRoutes.get('/casters/right', (req, res) => {
    res.send(req.app.casterController.rightCaster);
});

CasterRoutes.post('/casters/swap', discordAuth(), (req, res) => {
    req.app.casterController.swapSides();
    res.send(req.app.casterController.getCasters());
});

CasterRoutes.post('/casters/left', discordAuth(), (req, res) => {
    const { name } = req.body;
    req.app.casterController.leftCaster.setName(name);
    res.send(req.app.casterController.leftCaster);
});

CasterRoutes.post('/casters/right', discordAuth(), (req, res) => {
    const { name } = req.body;
    req.app.casterController.rightCaster.setName(name);
    res.send(req.app.casterController.rightCaster);
});

