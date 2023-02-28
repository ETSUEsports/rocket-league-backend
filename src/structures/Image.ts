export class Image{
    public name: string;
    public width: number;
    public height: number;
    public constructor(name: string, width: number, height: number){
        this.name = name;
        this.width = width;
        this.height = height;
    }

    public getArea(): number{
        return this.width * this.height;
    }

    public getPerimeter(): number{
        return 2 * (this.width + this.height);
    }

    public getDiagonal(): number{
        return Math.sqrt(this.width * this.width + this.height * this.height);
    }

    public getAspectRatio(): number{
        return this.width / this.height;
    }

    public getIsSquare(): boolean{
        return this.width === this.height;
    }

    public getIsPortrait(): boolean{
        return this.width < this.height;
    }

    public getIsLandscape(): boolean{
        return this.width > this.height;
    }

    public delete(): void{
        console.log("Image deleted");
    }

    public toJSON(): string{
        return JSON.stringify(this);
    }
}