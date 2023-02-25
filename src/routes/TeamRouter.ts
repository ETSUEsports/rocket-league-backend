import { Router } from 'express';

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
  req.app.teamController.leftTeam.addScore();
  res.sendStatus(200);
});

TeamRoutes.put('/api/v1/teams/right/score', (req, res) => {
  req.app.teamController.rightTeam.addScore();
  res.sendStatus(200);
});

TeamRoutes.delete('/api/v1/teams/left/score', (req, res) => {
  req.app.teamController.leftTeam.removeScore();
  res.sendStatus(200);
});

TeamRoutes.delete('/api/v1/teams/right/score', (req, res) => {
  req.app.teamController.rightTeam.removeScore();
  res.sendStatus(200);
});
