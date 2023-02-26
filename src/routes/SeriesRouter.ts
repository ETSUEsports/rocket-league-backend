import { Router } from 'express';

export const SeriesRoutes = Router();

SeriesRoutes.get('/api/v1/series', (req, res) => {
    res.send(req.app.seriesController.series);
});

SeriesRoutes.post('/api/v1/series/name', (req, res) => {
    req.app.seriesController.setName(req.body.name);
    res.sendStatus(200);
});


SeriesRoutes.put('/api/v1/series/game', (req, res) => {
    req.app.seriesController.addGame();
    res.sendStatus(200);
});

SeriesRoutes.delete('/api/v1/series/game', (req, res) => {
    req.app.seriesController.deleteGame();
    res.sendStatus(200);
});

SeriesRoutes.put('/api/v1/series/bestof', (req, res) => {
    req.app.seriesController.setBestOf(req.body.bestOf);
    res.sendStatus(200);
});

SeriesRoutes.put('/api/v1/series/gameNumber', (req, res) => {
    req.app.seriesController.setGameNumber(req.body.gameNumber);
    res.sendStatus(200);
});

