export class Team {
    private name: string;
    private image: string;
    private score: number;

    /**
     * Default Constructor for the Team class
     *
     * @param name - The name of the team
     * @param image - The image of the team
     * @param side - The side of the team
     * @returns A new Team object
     *
    */
    constructor(name: string, image: string, score: number = 0) {
        this.name = name;
        this.image = image;
        this.score = score;
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

}