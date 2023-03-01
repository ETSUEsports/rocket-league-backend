export class Image{
    public name: string;
    public constructor(name: string){
        this.name = name;
    }

    public delete(): void{
        console.log("Image deleted");
    }

    public toJSON(): string{
        return JSON.stringify(this);
    }
}