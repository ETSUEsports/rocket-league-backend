import { Router } from 'express';
export const CasterRoutes = Router();

CasterRoutes.get('/api/v1/casters', (req, res) => {
    res.send(req.app.casterController.getCasters());
});

CasterRoutes.get('/api/v1/casters/left', (req, res) => {
    res.send(req.app.casterController.leftCaster);
});

CasterRoutes.get('/api/v1/casters/right', (req, res) => {
    res.send(req.app.casterController.rightCaster);
});

CasterRoutes.post('/api/v1/casters/swap', (req, res) => {
    req.app.casterController.swapSides();
    res.send(req.app.casterController.getCasters());
});

CasterRoutes.post('/api/v1/casters/left', (req, res) => {
    const { name } = req.body;
    req.app.casterController.leftCaster.setName(name);
    res.send(req.app.casterController.leftCaster);
});

CasterRoutes.post('/api/v1/casters/right', (req, res) => {
    const { name } = req.body;
    req.app.casterController.rightCaster.setName(name);
    res.send(req.app.casterController.rightCaster);
});

