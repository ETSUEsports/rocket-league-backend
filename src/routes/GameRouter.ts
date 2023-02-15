import { Router } from 'express';

export const GameRoutes = Router();

GameRoutes.get('/', (req, res) => {
  res.send("Hello World!");
});