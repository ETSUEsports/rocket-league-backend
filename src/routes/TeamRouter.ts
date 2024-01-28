import { Router } from 'express';
import { Side } from '../enums/Side';
import { discordAuth, multiAuth } from '../auth';

export const TeamRoutes = Router();

TeamRoutes.get('/teams/0/left', (req, res) => {
  res.send(req.app.teamController0.leftTeam);
});

TeamRoutes.get('/teams/0/right', (req, res) => {
  res.send(req.app.teamController0.rightTeam);
});

TeamRoutes.post('/teams/0/swap', multiAuth(), (req, res) => {
  req.app.teamController0.swapSides();
  res.sendStatus(200);
});

TeamRoutes.put('/teams/0/left/score', multiAuth(), (req, res) => {
  console.log('left score +')
  req.app.teamController0.addScore(Side.Left);
  res.sendStatus(200);
});

TeamRoutes.put('/teams/0/right/score', multiAuth(), (req, res) => {
  console.log('right score +')
  req.app.teamController0.addScore(Side.Right);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams/0/left/score', multiAuth(), (req, res) => {
  console.log('left score -')
  req.app.teamController0.removeScore(Side.Left);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams/0/right/score', multiAuth(), (req, res) => {
  console.log('right score -')
  req.app.teamController0.removeScore(Side.Right);
  res.sendStatus(200);
});

TeamRoutes.post('/teams/0', discordAuth(), (req, res) => {
  req.app.teamController0.setTeams(req.body.leftTeam, req.body.rightTeam);
  res.sendStatus(200);
});

TeamRoutes.post('/teams/0/left', discordAuth(), (req, res) => {
  req.app.teamController0.setLeftTeam(req.body);
  res.sendStatus(200);
});

TeamRoutes.post('/teams/0/right', discordAuth(), (req, res) => {
  req.app.teamController0.setRightTeam(req.body);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams/0', discordAuth(), (req, res) => {
  req.app.teamController0.resetTeams()
  res.sendStatus(200);
});

TeamRoutes.get('/teams/1/left', (req, res) => {
  res.send(req.app.teamController1.leftTeam);
});

TeamRoutes.get('/teams/1/right', (req, res) => {
  res.send(req.app.teamController1.rightTeam);
});

TeamRoutes.post('/teams/1/swap', multiAuth(), (req, res) => {
  req.app.teamController1.swapSides();
  res.sendStatus(200);
});

TeamRoutes.put('/teams/1/left/score', multiAuth(), (req, res) => {
  req.app.teamController1.addScore(Side.Left);
  res.sendStatus(200);
});

TeamRoutes.put('/teams/1/right/score', multiAuth(), (req, res) => {
  req.app.teamController1.addScore(Side.Right);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams/1/left/score', multiAuth(), (req, res) => {
  req.app.teamController1.removeScore(Side.Left);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams/1/right/score', multiAuth(), (req, res) => {
  req.app.teamController1.removeScore(Side.Right);
  res.sendStatus(200);
});

TeamRoutes.post('/teams/1', discordAuth(), (req, res) => {
  req.app.teamController1.setTeams(req.body.leftTeam, req.body.rightTeam);
  res.sendStatus(200);
});

TeamRoutes.post('/teams/1/left', discordAuth(), (req, res) => {
  req.app.teamController1.setLeftTeam(req.body);
  res.sendStatus(200);
});

TeamRoutes.post('/teams/1/right', discordAuth(), (req, res) => {
  req.app.teamController1.setRightTeam(req.body);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams/1', discordAuth(), (req, res) => {
  req.app.teamController1.resetTeams()
  res.sendStatus(200);
});
