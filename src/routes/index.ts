import express from 'express';


import { TeamRoutes } from './TeamRouter';

import { defaultRoute } from './DefaultRouter';

export const routes = express.Router();

routes.use(TeamRoutes);
routes.use(defaultRoute);