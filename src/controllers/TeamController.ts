import { Team } from '../structures/Team';
import { Side } from '../enums/Side';
import { WSSBcast } from '../structures/WSBcast';
export class TeamController {

    private _leftTeam: Team;
    private _rightTeam: Team;
    private _wss: WSSBcast;

    constructor(wss: WSSBcast) {
        this._leftTeam = new Team("L Team", "https://i.ryois.me/etsu.png", 0);
        this._rightTeam = new Team("R Team", "https://i.ryois.me/etsu.png", 0);
        this._wss = wss;
    }

    onObjectUpdate(updatedObject: any) {
        const message = JSON.stringify({"event": "team:update", "team": updatedObject});
        this._wss.broadcast(message);
        console.log(message);
    }

    public get leftTeam(): Team {
        const vm = this;
        const proxy = new Proxy(this._leftTeam, {
            set(target, key, value) {
                target[key] = value;
                vm.onObjectUpdate(target);
                return true;
            },
        });
        return proxy;
    }

    public get rightTeam(): Team {
        const vm = this;
        const proxy = new Proxy(this._rightTeam, {
            set(target, key, value) {
                target[key] = value;
                vm.onObjectUpdate(target);
                return true;
            },
        });
        return proxy;
    }

    public swapSides(): void {
        const leftTeam = this._leftTeam;
        const rightTeam = this._rightTeam;
        this._leftTeam = rightTeam;
        this._rightTeam = leftTeam;
        const message = JSON.stringify({"event": "team:swap", "teams": this.getTeams()});
        this._wss.broadcast(message);
    }

    public getTeams(): Object {
        return ({
            leftTeam: this._leftTeam,
            rightTeam: this._rightTeam
        });
    }

    public setTeams(leftTeam: any, rightTeam: any): void {
        this._leftTeam.setName(leftTeam.name);
        this._leftTeam.setImage(leftTeam.image);
        this._leftTeam.setScore(leftTeam.score);
        this._rightTeam.setName(rightTeam.name);
        this._rightTeam.setImage(rightTeam.image);
        this._rightTeam.setScore(rightTeam.score);
        const message = JSON.stringify({"event": "team:update", "teams": this.getTeams()});
        this._wss.broadcast(message);
    }

    public setLeftTeam(leftTeam: any): void {
        this._leftTeam.setName(leftTeam.name);
        this._leftTeam.setImage(leftTeam.image);
        this._leftTeam.setScore(leftTeam.score);
        const message = JSON.stringify({"event": "team:update", "teams": this.getTeams()});
        this._wss.broadcast(message);
    }

    public setRightTeam(rightTeam: any): void {
        this._rightTeam.setName(rightTeam.name);
        this._rightTeam.setImage(rightTeam.image);
        this._rightTeam.setScore(rightTeam.score);
        const message = JSON.stringify({"event": "team:update", "teams": this.getTeams()});
        this._wss.broadcast(message);
    }

    public resetTeams(): void {
        this._leftTeam = new Team("L Team", "https://i.ryois.me/etsu.png", 0);
        this._rightTeam = new Team("R Team", "https://i.ryois.me/etsu.png", 0);
        const message = JSON.stringify({"event": "team:update", "teams": this.getTeams()});
        this._wss.broadcast(message);
    }

    public addScore(side: Side): void {
        if (side == Side.Left) {
            this._leftTeam.addScore();
        } else if (side == Side.Right) {
            this._rightTeam.addScore();
        }
        const message = JSON.stringify({"event": "team:update", "teams": this.getTeams()});
        this._wss.broadcast(message);
    }

    public removeScore(side: Side): void {
        if (side == Side.Left) {
            this._leftTeam.removeScore();
        } else if (side == Side.Right) {
            this._rightTeam.removeScore();
        }
        const message = JSON.stringify({"event": "team:update", "teams": this.getTeams()});
        this._wss.broadcast(message);
    }
}

