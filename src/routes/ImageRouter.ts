import { Router } from 'express';
export const ImageRoutes = Router();
import { Image } from '../structures/Image';

ImageRoutes.get('/api/v1/images', (req, res) => {
    res.send({error: false, data: req.app.imageController.toJSON()});
});

ImageRoutes.post('/api/v1/images', async(req, res) => {
    if (!req.files) {
        return res.sendStatus(400).send({"error": "No files were uploaded."});
    }
    const file = req.files.image;
    const image = new Image('test');
    req.app.imageController.addImage(image);
    res.send(image);
});

ImageRoutes.delete('/api/v1/images/:name', (req, res) => {
    const name = req.params.name;
    const image = req.app.imageController.getImage(name);
    if (image) {
        req.app.imageController.deleteImage(image);
        res.send(image);
    } else {
        res.status(404).send();
    }
});

ImageRoutes.get('/api/v1/images/:name', (req, res) => {
    const name = req.params.name;
    const image = req.app.imageController.getImage(name);
    if (image) {
        res.send(image);
    } else {
        res.status(404).send();
    }
});

