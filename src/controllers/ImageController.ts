import { Image } from "../structures/Image";
import { WSSBcast } from "../structures/WSBcast";

export class ImageController {

    private _images: Image[] = [];
    private _wss: WSSBcast;

    constructor(_wss: WSSBcast) {};

    public get images(): Image[] {
        return this._images;
    }

    public addImage(image: Image): void {
        this._images.push(image);
        console.log(image)
        const message = JSON.stringify({ "event": "image:add", "data": image });
        this._wss.broadcast(message);
    }

    public deleteImage(image: Image): void {
        const index = this._images.indexOf(image);
        if (index > -1) {
            this._images.splice(index, 1);
        }
        const message = JSON.stringify({ "event": "image:delete", "data": image });
        this._wss.broadcast(message);
    }

    public getImage(name: string): Image | undefined {
        return this._images.find((image) => image.name === name);
    }

    public toJSON(): string {
        return JSON.stringify(this._images);
    }

}