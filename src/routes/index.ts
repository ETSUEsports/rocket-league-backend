import express from 'express';


import { TeamRoutes } from './TeamRouter';
import { SeriesRoutes } from './SeriesRouter';
import { InterfaceRoutes } from './InterfaceRouter';
import { ImageRoutes } from './ImageRouter';
import { CasterRoutes } from './CasterRouter';
import { AuthRoutes } from './AuthRouter';
import { defaultRoute } from './DefaultRouter';

export const routes = express.Router();

routes.use(TeamRoutes);
routes.use(InterfaceRoutes);
routes.use(SeriesRoutes);
routes.use(ImageRoutes);
routes.use(CasterRoutes);
routes.use(AuthRoutes);
routes.use(defaultRoute);
// error handler
routes.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});