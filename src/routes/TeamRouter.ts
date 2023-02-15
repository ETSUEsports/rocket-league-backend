import { Router } from 'express';

export const TeamRoutes = Router();

TeamRoutes.get('/', (req, res) => {
  res.send("Hello World!");
});