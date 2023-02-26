
export class Series {
    private gameNumber: number;
    private bestOf: number;
    private name: string;

    constructor(gameNumber: number, bestOf: number, name: string) {
        this.gameNumber = gameNumber;
        this.bestOf = bestOf;
        this.name = name;
    }

    public getGameNumber(): number {
        return this.gameNumber;
    }

    public getBestOf(): number {
        return this.bestOf;
    }

    public setGameNumber(gameNumber: number): void {
        this.gameNumber = gameNumber;
    }

    public setBestOf(bestOf: number): void {
        this.bestOf = bestOf;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
    

}