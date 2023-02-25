import { Side } from "../enums/Side";

export class Team {
    private name: string;
    private image: string;
    private score: number;
    private side: Side;

    /**
     * Default Constructor for the Team class
     *
     * @param name - The name of the team
     * @param image - The image of the team
     * @param side - The side of the team
     * @returns A new Team object
     *
    */
    constructor(name: string, image: string, score: number = 0, side: Side) {
        this.name = name;
        this.image = image;
        this.score = score;
        this.side = side;
    }

    public addScore(): void {
        if (this.score >= 9) {
            this.score = 9;
        }
        else {
            this.score++;
        }
    }

    public removeScore(): void {
        if (this.score <= 0) {
            this.score = 0;
        }
        else {
            this.score--;
        }
    }
    
    public setName(name: string): void {
        this.name = name;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public setScore(score: number): void {
        this.score = score;
    }

    public setSide(side: Side): void {
        this.side = side;
    }
    

}