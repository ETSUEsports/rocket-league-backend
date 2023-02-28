import { Team } from '../structures/Team';
import { Caster } from '../structures/Caster';

export class InterfaceController {

    private _leftTeam: Team;
    private _rightTeam: Team;
    private _leftCaster: Caster;
    private _rightCaster: Caster;

    constructor(leftTeam: Team, rightTeam: Team, leftCaster: Caster, rightCaster: Caster) {
        this._leftTeam = leftTeam;
        this._rightTeam = rightTeam;
        this._leftCaster = leftCaster;
        this._rightCaster = rightCaster;
    }

    public vMix(): any {
        const data = [{
			TEAM_L_NAME: this._leftTeam.getName().toLowerCase(),
			TEAM_R_NAME: this._rightTeam.getName().toLowerCase(),
			TEAM_L_IMG: this._leftTeam.getImage(),
			TEAM_R_IMG: this._rightTeam.getImage(),
			TEAM_L_SCORE: this._leftTeam.getScore(),
			TEAM_R_SCORE: this._rightTeam.getScore(),
			CASTER_L: this._leftCaster.getName().toLowerCase(),
			CASTER_R: this._rightCaster.getName().toLowerCase(),
		}];
        return data;
    }

}