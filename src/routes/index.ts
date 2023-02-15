import express from 'express';


import { ConfigRoutes } from './ConfigRouter';
import { GameRoutes } from './GameRouter';
import { SeriesRoutes } from './SeriesRouter';
import { TeamRoutes } from './TeamRouter';

import { defaultRoute } from './DefaultRouter';

export const routes = express.Router();

routes.use(ConfigRoutes);
routes.use(GameRoutes);
routes.use(SeriesRoutes);
routes.use(TeamRoutes);
routes.use(defaultRoute);