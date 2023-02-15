import { Team } from './Team';

export class Game {
    private _id: string;
    private _number: number;
    private _leftTeam: Team;
    private _rightTeam: Team;
    private _leftScore: number = 0;
    private _rightScore: number = 0;
    private _winner: Team;

    /**
     * Default Constructor for the Game class
     * @param id - The id of the game
     * @param number - The number of the game in the series
     * @param leftTeam - The left team
     * @param rightTeam - The right team
     * @returns A new Game object
    */
    constructor(id: string, number: number, leftTeam: Team, rightTeam: Team) {
        this._id = id;
        this._number = number;
        this._leftTeam = leftTeam;
        this._rightTeam = rightTeam;
    }

    /**
     * Get the left team
     * @returns The left team
     * @readonly
     * @memberof Game
     * @public
     * @see Team
     * @see Side
    */
    public get leftTeam(): Team {
        return this._leftTeam;
    }

    /**
     * Get the right team
     * @returns The right team
     * @readonly
     * @memberof Game
     * @public
     * @see Team
     * @see Side
    */
    public get rightTeam(): Team {
        return this._rightTeam;
    }

    /**
     * Get the left score
     * @returns The left score
     * @readonly
     * @memberof Game
     * @public
     * @see Team
    */
    public get leftScore(): number {
        return this._leftScore;
    }

    /**
     * Get the right score
     * @returns The right score
     * @readonly
     * @memberof Game
     * @public
     * @see Team
    */
    public get rightScore(): number {
        return this._rightScore;
    }

    /**
     * Increment the left score
     * @memberof Game
     * @public
     * @see Team
     * @see Side
     * @returns void
    */
    public incrementLeftScore(): void {
        this._leftScore++;
    }


    /**
     * Increment the right score
     * @memberof Game
     * @public
     * @see Team
     * @see Side
     * @returns void
    */
    public incrementRightScore(): void {
        this._rightScore++;
    }

    /**
     * Get the winner of the game
     * @returns The winner of the game
     * @readonly
     * @memberof Game
     * @public
     * @see Team
    */
    public get winner(): Team {
        return this._winner;
    }

    /**
     * Set the winner of the game
     * @memberof Game
     * @public
     * @see Team
     * @returns void
     * @param winner - The winner of the game
     * @throws Error if the winner is not a valid team
    */
    public set winner(winner: Team) {
        if (winner === this._leftTeam || winner === this._rightTeam) {
            this._winner = winner;
        } else {
            throw new Error('The winner must be a valid team');
        }
    }

    /**
     * Get the id of the game
     * @returns The id of the game
     * @readonly
     * @memberof Game
     * @public
    */
    public get id(): string {
        return this._id;
    }

    /**
     * Get the number of the game in the series
     * @returns The number of the game in the series
     * @readonly
     * @memberof Game
     * @public
    */
    public get number(): number {
        return this._number;
    }

}