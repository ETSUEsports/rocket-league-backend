import { Side } from '../enums/Side';

export class Team {
    private _name: string;
    private _image: string;
    private _side: Side;

    /**
     * Default Constructor for the Team class
     *
     * @param name - The name of the team
     * @param image - The image of the team
     * @param side - The side of the team
     * @returns A new Team object
     *
    */
    constructor(name: string, image: string, side: Side, score: number = 0) {
        this._name = name;
        this._image = image;
        this._side = side;
    }

    /**
     * Get the name of the team
     * @returns The name of the team
     * @readonly
     * @memberof Team
     * @public
    */
    public get name(): string {
        return this._name;
    }

    /**
     * Get the image of the team
     * @returns The image of the team
     * @readonly
     * @memberof Team
     * @public
     */
    public get image(): string {
        return this._image;
    }
    
    /**
     * Get the side of the team
     * @returns The side of the team
     * @readonly
     * @memberof Team
     * @public
     * @see Side
    */
    public get side(): Side {
        return this._side;
    }

    /**
     * Swap the side of the team
     * @memberof Team
     * @public
     * @see Side
    */
    public swapSide(): void {
        this._side = this._side === Side.Left ? Side.Right : Side.Left;
    }

}