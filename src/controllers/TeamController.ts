import { Team } from '../structures/Team';
import { Side } from '../enums/Side';
import { WSSBcast } from '../structures/WSBcast';
export class TeamController {

    private _leftTeam: Team;
    private _rightTeam: Team;
    private _wss: WSSBcast;

    constructor(wss: WSSBcast) {
        this._leftTeam = new Team("Left Team", "https://i.imgur.com/1ZQ3Z0M.png", Side.Left);
        this._rightTeam = new Team("Right Team", "https://i.imgur.com/1ZQ3Z0M.png", Side.Right);
        this._wss = wss;
    }

    onObjectUpdate(updatedObject: any, objectName: string) {
        const message = JSON.stringify({"updated": objectName, "object": updatedObject});
        this._wss.broadcast(message);
        console.log(message);
    }

    public get leftTeam(): Team {
        const vm = this;
        const proxy = new Proxy(this._leftTeam, {
            set(target, key, value) {
                target[key] = value;
                vm.onObjectUpdate(target, "leftTeam");
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
                vm.onObjectUpdate(target, "rightTeam");
                return true;
            },
        });
        return proxy;
    }

    public swapSides(): void {
        const tempTeam = this._leftTeam;
        this._leftTeam = this._rightTeam;
        this._rightTeam = tempTeam;
        const message = JSON.stringify({"teamSwap": true, "teams": this.getTeams()});
        this._wss.broadcast(message);
    }

    public getTeams(): Object {
        return ({
            leftTeam: this._leftTeam,
            rightTeam: this._rightTeam
        });
    }
}

