import { Router } from 'express';

export const SeriesRoutes = Router();

SeriesRoutes.get('/', (req, res) => {
  res.send("Hello World!");
});