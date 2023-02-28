import { Router } from 'express';
import { Side } from '../enums/Side';

export const TeamRoutes = Router();

TeamRoutes.get('/api/v1/teams/left', (req, res) => {
  res.send(req.app.teamController.leftTeam);
});

TeamRoutes.get('/api/v1/teams/right', (req, res) => {
  res.send(req.app.teamController.rightTeam);
});

TeamRoutes.post('/api/v1/teams/swap', (req, res) => {
  req.app.teamController.swapSides();
  res.sendStatus(200);
});

TeamRoutes.put('/api/v1/teams/left/score', (req, res) => {
  console.log('left score +')
  req.app.teamController.addScore(Side.Left);
  res.sendStatus(200);
});

TeamRoutes.put('/api/v1/teams/right/score', (req, res) => {
  console.log('right score +')
  req.app.teamController.addScore(Side.Right);
  res.sendStatus(200);
});

TeamRoutes.delete('/api/v1/teams/left/score', (req, res) => {
  console.log('left score -')
  req.app.teamController.removeScore(Side.Left);
  res.sendStatus(200);
});

TeamRoutes.delete('/api/v1/teams/right/score', (req, res) => {
  console.log('right score -')
  req.app.teamController.removeScore(Side.Right);
  res.sendStatus(200);
});

TeamRoutes.post('/api/v1/teams', (req, res) => {
  req.app.teamController.setTeams(req.body.leftTeam, req.body.rightTeam);
  res.sendStatus(200);
});

TeamRoutes.delete('/api/v1/teams', (req, res) => {
  req.app.teamController.resetTeams()
  res.sendStatus(200);
});