import { Router } from 'express';
import discordAuth from '../auth';

export const SeriesRoutes = Router();

SeriesRoutes.get('/series', (req, res) => {
    res.send(req.app.seriesController.series);
});

SeriesRoutes.post('/series/name', discordAuth(), (req, res) => {
    req.app.seriesController.setName(req.body.name);
    res.sendStatus(200);
});

SeriesRoutes.post('/series', discordAuth(), (req, res) => {
    req.app.seriesController.setName(req.body.name);
    req.app.seriesController.setGameNumber(req.body.gameNumber);
    req.app.seriesController.setBestOf(req.body.bestOf);
    res.sendStatus(200);
});

SeriesRoutes.put('/series/game', discordAuth(), (req, res) => {
    req.app.seriesController.addGame();
    res.sendStatus(200);
});

SeriesRoutes.delete('/series/game', discordAuth(), (req, res) => {
    req.app.seriesController.deleteGame();
    res.sendStatus(200);
});

SeriesRoutes.put('/series/bestof', discordAuth(), (req, res) => {
    req.app.seriesController.setBestOf(req.body.bestOf);
    res.sendStatus(200);
});

SeriesRoutes.put('/series/game', discordAuth(), (req, res) => {
    req.app.seriesController.setGameNumber(req.body.gameNumber);
    res.sendStatus(200);
});

SeriesRoutes.delete('/series', discordAuth(), (req, res) => {
    req.app.seriesController.reset();
    res.sendStatus(200);
});