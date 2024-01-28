import { Router } from 'express';
import { discordAuth, multiAuth } from '../auth';

export const SeriesRoutes = Router();

SeriesRoutes.get('/series/0', (req, res) => {
    res.send(req.app.seriesController0.series);
});

SeriesRoutes.post('/series/0/name', discordAuth(), (req, res) => {
    req.app.seriesController0.setName(req.body.name);
    res.sendStatus(200);
});

SeriesRoutes.post('/series/0', discordAuth(), (req, res) => {
    req.app.seriesController0.setName(req.body.name);
    req.app.seriesController0.setGameNumber(req.body.gameNumber);
    req.app.seriesController0.setBestOf(req.body.bestOf);
    res.sendStatus(200);
});

SeriesRoutes.put('/series/0/game', multiAuth(), (req, res) => {
    try{
        req.app.seriesController0.addGame();
    }
    catch(e){
        return res.status(400).send(e.message);
    }
    res.sendStatus(200);
});

SeriesRoutes.delete('/series/0/game', multiAuth(), (req, res) => {
    try{
        req.app.seriesController0.deleteGame();
    }
    catch(e){
        return res.status(400).send(e.message);
    }
    res.sendStatus(200);
});

SeriesRoutes.put('/series/0/bestof', discordAuth(), (req, res) => {
    req.app.seriesController0.setBestOf(req.body.bestOf);
    res.sendStatus(200);
});

SeriesRoutes.patch('/series/0/game', discordAuth(), (req, res) => {
    req.app.seriesController0.setGameNumber(req.body.gameNumber);
    res.sendStatus(200);
});

SeriesRoutes.delete('/series/0', discordAuth(), (req, res) => {
    req.app.seriesController0.reset();
    res.sendStatus(200);
});

SeriesRoutes.get('/series/1', (req, res) => {
    res.send(req.app.seriesController1.series);
});

SeriesRoutes.post('/series/1/name', discordAuth(), (req, res) => {
    req.app.seriesController1.setName(req.body.name);
    res.sendStatus(200);
});

SeriesRoutes.post('/series/1', discordAuth(), (req, res) => {
    req.app.seriesController1.setName(req.body.name);
    req.app.seriesController1.setGameNumber(req.body.gameNumber);
    req.app.seriesController1.setBestOf(req.body.bestOf);
    res.sendStatus(200);
});

SeriesRoutes.put('/series/1/game', multiAuth(), (req, res) => {
    try{
        req.app.seriesController1.addGame();
    }
    catch(e){
        return res.status(400).send(e.message);
    }
    res.sendStatus(200);
});

SeriesRoutes.delete('/series/1/game', multiAuth(), (req, res) => {
    try{
        req.app.seriesController1.deleteGame();
    }
    catch(e){
        return res.status(400).send(e.message);
    }
    res.sendStatus(200);
});

SeriesRoutes.put('/series/1/bestof', discordAuth(), (req, res) => {
    req.app.seriesController1.setBestOf(req.body.bestOf);
    res.sendStatus(200);
});

SeriesRoutes.patch('/series/1/game', discordAuth(), (req, res) => {
    req.app.seriesController1.setGameNumber(req.body.gameNumber);
    res.sendStatus(200);
});

SeriesRoutes.delete('/series/1', discordAuth(), (req, res) => {
    req.app.seriesController1.reset();
    res.sendStatus(200);
});
