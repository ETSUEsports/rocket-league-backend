import Player from "./Player";

export = Team;

class Team {
    private name: string;
    private image: string;
    private score: number;
    private gamesWon: number;
    private gamesLost: number;
    private players: Player;

    constructor(name: string, image: string, score: number, gamesWon: number, gamesLost: number) {
        this.name = name;
        this.image = image;
        this.score = score;
        this.gamesWon = gamesWon;
        this.gamesLost = gamesLost;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score;
    }
    getGamesWon() {
        return this.gamesWon;
    }
    setGamesWon(gamesWon) {
        this.gamesWon = gamesWon;
    }
    getGamesLost() {
        return this.gamesLost;
    }
    setGamesLost(gamesLost) {
        this.gamesLost = gamesLost;
    }
    getPlayers() {
        return this.players;
    }
    setPlayers(players) {
        this.players = players;
    }
}