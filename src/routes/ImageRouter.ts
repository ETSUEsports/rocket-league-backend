import { Router } from 'express';
import { UploadedFile } from 'express-fileupload';
import fs from 'fs';
export const ImageRoutes = Router();

ImageRoutes.get('/api/v1/images', async (req, res) => {
    let output = [];
    fs.readdirSync(process.cwd() + '/public/').forEach(file => {
        output.push({ name: file, public_url: encodeURI(`${req.protocol}://${req.get('host')}/static/${file}`) });
    });
    res.send(output);
});

ImageRoutes.post('/api/v1/images', async (req, res) => {
    if (!req.files) {
        return res.sendStatus(400).send({ "error": "No files were uploaded." });
    }
    if (!req.files.image) {
        return res.sendStatus(400).send({ "error": "No image was sent" });
    }
    const file = req.files.image as UploadedFile;
    console.log(`Uploaded file ${file.name} to ${process.cwd() + '/public/' + file.name}`)
    file.mv(process.cwd() + '/public/' + file.name), function (err) {
        if (err) {
            return res.status(500).send(err);
        }
    }
    res.send({ status: "ok", name: file.name, path: process.cwd() + '/public/' + file.name, size: file.size, mimetype: file.mimetype, encoding: file.encoding, public_url: encodeURI(`${req.protocol}://${req.get('host')}/static/${file.name}`) });
});

ImageRoutes.delete('/api/v1/images/:name', async (req, res) => {
    const name = req.params.name;
    if (!name) {
        return res.sendStatus(400).send({ "error": "No name was sent" });
    }
    fs.unlinkSync(process.cwd() + '/public/' + name);
    console.log(`Deleted file ${name} from ${process.cwd() + '/public/' + name}`)
    res.send({ status: "ok" });
});