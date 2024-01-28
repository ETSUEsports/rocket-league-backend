import { Router } from 'express';
import { discordAuth } from '../auth';

export const CasterRoutes = Router();

CasterRoutes.get('/casters/0', (req, res) => {
    res.send(req.app.casterController0.getCasters());
});

CasterRoutes.get('/casters/0/left', (req, res) => {
    res.send(req.app.casterController0.leftCaster);
});

CasterRoutes.get('/casters/0/right', (req, res) => {
    res.send(req.app.casterController0.rightCaster);
});

CasterRoutes.post('/casters/0/swap', discordAuth(), (req, res) => {
    req.app.casterController0.swapSides();
    res.send(req.app.casterController0.getCasters());
});

CasterRoutes.post('/casters/0/left', discordAuth(), (req, res) => {
    const { name } = req.body;
    req.app.casterController0.leftCaster.setName(name);
    res.send(req.app.casterController0.leftCaster);
});

CasterRoutes.post('/casters/0/right', discordAuth(), (req, res) => {
    const { name } = req.body;
    req.app.casterController0.rightCaster.setName(name);
    res.send(req.app.casterController0.rightCaster);
});

CasterRoutes.get('/casters/1', (req, res) => {
    res.send(req.app.casterController1.getCasters());
});

CasterRoutes.get('/casters/1/left', (req, res) => {
    res.send(req.app.casterController1.leftCaster);
});

CasterRoutes.get('/casters/1/right', (req, res) => {
    res.send(req.app.casterController1.rightCaster);
});

CasterRoutes.post('/casters/1/swap', discordAuth(), (req, res) => {
    req.app.casterController1.swapSides();
    res.send(req.app.casterController1.getCasters());
});

CasterRoutes.post('/casters/1/left', discordAuth(), (req, res) => {
    const { name } = req.body;
    req.app.casterController1.leftCaster.setName(name);
    res.send(req.app.casterController1.leftCaster);
});

CasterRoutes.post('/casters/1/right', discordAuth(), (req, res) => {
    const { name } = req.body;
    req.app.casterController1.rightCaster.setName(name);
    res.send(req.app.casterController1.rightCaster);
});