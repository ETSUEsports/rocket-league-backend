import { Series } from '../structures/Series';
import { WSSBcast } from '../structures/WSBcast';
export class SeriesController {

    private _series: Series;
    private _wss: WSSBcast;

    constructor(wss: WSSBcast) {
        this._series = new Series(1, 5, "Series Name");
        this._wss = wss;
    }

    onObjectUpdate(updatedObject: any) {
        const message = JSON.stringify({"event": "series:update", "series": updatedObject});
        this._wss.broadcast(message);
        console.log(message);
    }

    public get series(): Series {
        const vm = this;
        const proxy = new Proxy(this._series, {
            set(target, key, value) {
                target[key] = value;
                vm.onObjectUpdate(target);
                return true;
            },
        });
        return proxy;
    }

    public setGameNumber(gameNumber: number): void {
        // set game number, cannot be less than 1 and cannot be greater than best of
        if (gameNumber < 1) {
            gameNumber = 1;
        } else if (gameNumber > this._series.getBestOf()) {
            gameNumber = this._series.getBestOf();
        }
        this._series.setGameNumber(gameNumber);
        const message = JSON.stringify({"event": "series:update", "series": this.getSeries()});
        this._wss.broadcast(message);
    }

    public setBestOf(bestOf: number): void {
        // set best of, cannot be less than 1
        if (bestOf < 1) {
            bestOf = 1;
        }
        this._series.setBestOf(bestOf);
        const message = JSON.stringify({"event": "series:update", "series": this.getSeries()});
        this._wss.broadcast(message);
    }

    public addGame(): void {
        // add game, cannot be greater than best of 
        if (this._series.getGameNumber() >= this._series.getBestOf()) {
            throw new Error("Cannot add game, game number is greater than best of");
        }
        this._series.setGameNumber(this._series.getGameNumber() + 1);
        const message = JSON.stringify({"event": "series:update", "series": this.getSeries()});
        this._wss.broadcast(message);
    }

    public deleteGame(): void {
        // delete game, cannot be less than 1
        if (this._series.getGameNumber() <= 1) {
            throw new Error("Cannot delete game, game number is less than 1");
        }
        this._series.setGameNumber(this._series.getGameNumber() - 1);
        const message = JSON.stringify({"event": "series:update", "series": this.getSeries()});
        this._wss.broadcast(message);
    }

    public getSeries(): Series {
        return this._series;
    }

    public setName(name: string): void {
        this._series.setName(name);
        const message = JSON.stringify({"event": "series:update", "series": this.getSeries()});
        this._wss.broadcast(message);
    }

    public reset(): void {
        this._series = new Series(1, 5, "Series Name");
        const message = JSON.stringify({"event": "series:update", "series": this.getSeries()});
        this._wss.broadcast(message);
    }
    
}