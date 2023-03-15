import { Router } from 'express';
import { UploadedFile } from 'express-fileupload';
import fs from 'fs';
export const ImageRoutes = Router();
import { discordAuth }  from '../auth';

ImageRoutes.get('/images', async (req, res, next) => {
    let output = [];
    try {
        fs.readdirSync(process.cwd() + '/public/').forEach(file => {
            if(file == ".empty-directory") return;
            if(process.env.NODE_ENV) {
                output.push({ name: file, public_url: encodeURI(`${process.env.PRODUCTION_BACKEND_URL}/static/${file}`) });
            } else {
                output.push({ name: file, public_url: encodeURI(`${req.protocol}://${req.get('host')}/static/${file}`) });
            }
        });
    } catch (e) {
        return next(e);
    }
    res.send(output);
});

ImageRoutes.post('/images', discordAuth(), async (req, res, next) => {
    if (!req.files) {
        return res.sendStatus(400).send({ "error": "No files were uploaded." });
    }
    if (!req.files.image) {
        return res.sendStatus(400).send({ "error": "No image was sent" });
    }
    const file = req.files.image as UploadedFile;
    console.log(`Uploaded file ${file.name} to ${process.cwd() + '/public/' + file.name}`)
    try{
        file.mv(process.cwd() + '/public/' + file.name), function (err) {
            if (err) {
                return res.status(500).send(err);
            }
        }
    } catch(e) {
        console.error(e);
        return next(e);
    }
    res.send({ status: "ok", name: file.name, path: process.cwd() + '/public/' + file.name, size: file.size, mimetype: file.mimetype, encoding: file.encoding, public_url: encodeURI(`${req.protocol}://${req.get('host')}/static/${file.name}`) });
});

ImageRoutes.delete('/images/:name', discordAuth(), async (req, res, next) => {
    const name = req.params.name;
    if (!name) {
        return res.sendStatus(400).send({ "error": "No name was sent" });
    }
    try{
        fs.unlinkSync(process.cwd() + '/public/' + name);
    } catch(e) {
        console.error(e);
        return next(e);
    }
    
    console.log(`Deleted file ${name} from ${process.cwd() + '/public/' + name}`)
    res.send({ status: "ok" });
});