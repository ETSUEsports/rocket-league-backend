import express, { Request, Response } from 'express';

export const ConfigRoutes = express.Router();

ConfigRoutes.post('/config/rocket_league/host', (req: Request, res: Response): void => {
    const { host } = req.body;

    if (!host) {
        res.status(400).send('Missing host');
        return;
    }

    res.status(200).send('Host set');
});