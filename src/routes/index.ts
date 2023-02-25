import express from 'express';


import { TeamRoutes } from './TeamRouter';
import { SeriesRoutes } from './SeriesRouter';
import { defaultRoute } from './DefaultRouter';

export const routes = express.Router();

routes.use(TeamRoutes);
routes.use(SeriesRoutes);
routes.use(defaultRoute);