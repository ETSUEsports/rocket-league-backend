import { Game } from './Game';
import { Team } from './Team';

export class Series {
    private _id: string;
    private _games: Game[];
    private _leftTeam: Team;
    private _rightTeam: Team;
    private _leftScore: number = 0;
    private _rightScore: number = 0;
    private _bestOf: number;
    private _currentGame: number = 0;
    private _isFinished: boolean = false;

    /**
     * Default Constructor for the Series class
     * @param id - The id of the series
     * @param games - The games in the series
     * @param leftTeam - The left team
     * @param rightTeam - The right team
     * @param bestOf - The best of number
     * @returns A new Series object
     * @see Game
     * @see Team
    */
    constructor(id: string, games: Game[], leftTeam: Team, rightTeam: Team, bestOf: number) {
        this._id = id;
        this._games = games;
        this._leftTeam = leftTeam;
        this._rightTeam = rightTeam;
        this._bestOf = bestOf;
    }

    /**
     * Get the left team
     * @returns The left team
     * @readonly
     * @memberof Series
     * @public
     * @see Team
    */
    public get leftTeam(): Team {
        return this._leftTeam;
    }

    /**
     * Get the right team
     * @returns The right team
     * @readonly
     * @memberof Series
     * @public
     * @see Team
    */
    public get rightTeam(): Team {
        return this._rightTeam;
    }

    /**
     * Get the left score
     * @returns The left score
     * @readonly
     * @memberof Series
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
     * @memberof Series
     * @public
     * @see Team
    */
    public get rightScore(): number {
        return this._rightScore;
    }

    /**
     * Get the winner of the series
     * @returns The winner of the series
     * @readonly
     * @memberof Series
     * @public
     * @see Team
     * @see loser
    */  
    public get winner(): Team {
        if (this._leftScore > this._rightScore) {
            return this._leftTeam;
        } else {
            return this._rightTeam;
        }
    }

    /**
     * Get the loser of the series
     * @returns The loser of the series
     * @readonly
     * @memberof Series
     * @public
     * @see Team
     * @see winner
    */
    public get loser(): Team {
        if (this._leftScore > this._rightScore) {
            return this._rightTeam;
        } else {
            return this._leftTeam;
        }
    }

    /**
     * Get the current game
     * @returns The current game
     * @readonly
     * @memberof Series
     * @public
     * @see Game
    */
    public get currentGame(): Game {
        return this._games[this._currentGame];
    }

    /**
     * Get the current game number
     * @returns The current game number
     * @readonly
     * @memberof Series
     * @public
     * @see Game
     * @see currentGame
    */
    public get currentGameNumber(): number {
        return this._currentGame + 1;
    }

    /**
     * Get the best of number
     * @returns The best of number
     * @readonly
     * @memberof Series
     * @public
     * @see Game
     * @see currentGame
     * @see currentGameNumber
    */
    public get bestOf(): number {
        return this._bestOf;
    }

    /**
     * Get the games in the series
     * @returns The games in the series
     * @readonly
     * @memberof Series
     * @public
     * @see Game
     * @see currentGame
     * @see currentGameNumber
     * @see bestOf
    */
    public get games(): Game[] {
        return this._games;
    }

    /**
     * Get the id of the series
     * @returns The id of the series
     * @readonly
     * @memberof Series
     * @public
    */
    public get id(): string {
        return this._id;
    }

    /**
     * Get if the series is finished
     * @returns If the series is finished
     * @readonly
     * @memberof Series
     * @public
     * @see Game
     * @see currentGame
    */
    public get isFinished(): boolean {
        return this._isFinished;
    }

}