import Player from "./Player";
import Team from "./Team";
import Game from "./Game";

export = Replay;

class Replay {
    private scorer: Player;
    private assister: Player;
    private team: Team;
    private game: Game;
    private speed: number;

    constructor(scorer: Player, assister: Player, team: Team, game: Game, speed: number) {
        this.scorer = scorer;
        this.assister = assister;
        this.team = team;
        this.game = game;
        this.speed = speed;
    }

    getScorer() {
        return this.scorer;
    }
    setScorer(scorer) {
        this.scorer = scorer;
    }
    getAssister() {
        return this.assister;
    }

    setAssister(assister) {
        this.assister = assister;
    }
    getTeam() {
        return this.team;
    }
    setTeam(team) {
        this.team = team;
    }
    getGame() {
        return this.game;
    }
    setGame(game) {
        this.game = game;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }

}