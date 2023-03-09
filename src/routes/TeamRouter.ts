import { Router } from 'express';
import { Side } from '../enums/Side';

export const TeamRoutes = Router();

TeamRoutes.get('/teams/left', (req, res) => {
  res.send(req.app.teamController.leftTeam);
});

TeamRoutes.get('/teams/right', (req, res) => {
  res.send(req.app.teamController.rightTeam);
});

TeamRoutes.post('/teams/swap', (req, res) => {
  req.app.teamController.swapSides();
  res.sendStatus(200);
});

TeamRoutes.put('/teams/left/score', (req, res) => {
  console.log('left score +')
  req.app.teamController.addScore(Side.Left);
  res.sendStatus(200);
});

TeamRoutes.put('/teams/right/score', (req, res) => {
  console.log('right score +')
  req.app.teamController.addScore(Side.Right);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams/left/score', (req, res) => {
  console.log('left score -')
  req.app.teamController.removeScore(Side.Left);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams/right/score', (req, res) => {
  console.log('right score -')
  req.app.teamController.removeScore(Side.Right);
  res.sendStatus(200);
});

TeamRoutes.post('/teams', (req, res) => {
  req.app.teamController.setTeams(req.body.leftTeam, req.body.rightTeam);
  res.sendStatus(200);
});

TeamRoutes.delete('/teams', (req, res) => {
  req.app.teamController.resetTeams()
  res.sendStatus(200);
});