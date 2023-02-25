import { Team } from '../structures/Team';
import { Side } from '../enums/Side';
import { WSSBcast } from '../structures/WSBcast';
export class TeamController {

    private _leftTeam: Team;
    private _rightTeam: Team;
    private _wss: WSSBcast;

    constructor(wss: WSSBcast) {
        this._leftTeam = new Team("Left Team", "https://i.ryois.me/etsu_left.png", 0, Side.Left);
        this._rightTeam = new Team("Right Team", "https://i.ryois.me/etsu_right.png", 0, Side.Right);
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
        this._leftTeam.setSide(Side.Left);
        this._rightTeam.setSide(Side.Right);
        const message = JSON.stringify({"event": "team:swap", "teams": this.getTeams()});
        this._wss.broadcast(message);
    }

    public getTeams(): Object {
        return ({
            leftTeam: this._leftTeam,
            rightTeam: this._rightTeam
        });
    }
}

