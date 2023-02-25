
export class Series {
    private gameNumber: number;
    private bestOf: number;

    constructor(gameNumber: number, bestOf: number) {
        this.gameNumber = gameNumber;
        this.bestOf = bestOf;
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

}