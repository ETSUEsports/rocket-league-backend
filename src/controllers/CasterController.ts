import { Caster } from '../structures/Caster';
import { WSSBcast } from '../structures/WSBcast';
export class CasterController {

    private _leftCaster: Caster;
    private _rightCaster: Caster;
    private _wss: WSSBcast;

    constructor(_wss: WSSBcast) {
        this._leftCaster = new Caster('Left Caster');
        this._rightCaster = new Caster('Right Caster');
        this._wss = _wss;
    }

    public get leftCaster(): Caster {
        const vm = this;
        const proxy = new Proxy(this._leftCaster, {
            set(target, key, value) {
                target[key] = value;
                vm.onObjectUpdate(target);
                return true;
            },
        });
        return proxy;
    }

    public get rightCaster(): Caster {
        const vm = this;
        const proxy = new Proxy(this._rightCaster, {
            set(target, key, value) {
                target[key] = value;
                vm.onObjectUpdate(target);
                return true;
            },
        });
        return proxy;
    }

    onObjectUpdate(updatedObject: any) {
        const message = JSON.stringify({"event": "caster:update", "caster": updatedObject});
        this._wss.broadcast(message);
        console.log(message);
    }

    public swapSides(): void {
        const leftCaster = this._leftCaster;
        const rightCaster = this._rightCaster;
        this._leftCaster = rightCaster;
        this._rightCaster = leftCaster;
        const message = JSON.stringify({"event": "caster:swap", "casters": this.getCasters()});
        this._wss.broadcast(message);
    }

    public getCasters(): Object {
        return ({
            leftCaster: this._leftCaster,
            rightCaster: this._rightCaster
        });
    }

}