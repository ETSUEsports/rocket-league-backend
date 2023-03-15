import { Router } from 'express';
import { discordAuth, multiAuth } from '../auth';

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

SeriesRoutes.put('/series/game', multiAuth(), (req, res) => {
    try{
        req.app.seriesController.addGame();
    }
    catch(e){
        return res.status(400).send(e.message);
    }
    res.sendStatus(200);
});

SeriesRoutes.delete('/series/game', multiAuth(), (req, res) => {
    try{
        req.app.seriesController.deleteGame();
    }
    catch(e){
        return res.status(400).send(e.message);
    }
    res.sendStatus(200);
});

SeriesRoutes.put('/series/bestof', discordAuth(), (req, res) => {
    req.app.seriesController.setBestOf(req.body.bestOf);
    res.sendStatus(200);
});

SeriesRoutes.patch('/series/game', discordAuth(), (req, res) => {
    req.app.seriesController.setGameNumber(req.body.gameNumber);
    res.sendStatus(200);
});

SeriesRoutes.delete('/series', discordAuth(), (req, res) => {
    req.app.seriesController.reset();
    res.sendStatus(200);
});