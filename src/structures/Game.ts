import Player from "./Player";
import Team from "./Team";

export = Game;

class Game {
    private leftTeam: Team;
    private rightTeam: Team;
    private currentGame: number;
    private clock: number;
    private bestOf: number;
    private isOvertime: boolean;
    private isReplay: boolean;
    private spectatorTarget: Player;
    private hasWinner: boolean;
    private winner: Team;

    constructor(leftTeam: Team, rightTeam: Team, currentGame: number, clock: number, bestOf: number) {
        this.leftTeam = leftTeam;
        this.rightTeam = rightTeam;
        this.currentGame = currentGame;
        this.clock = clock;
        this.bestOf = bestOf;
        this.isOvertime = false;
        this.isReplay = false;
        this.spectatorTarget = null;
        this.hasWinner = false;
        this.winner = null;
    }

    getLeftTeam() {
        return this.leftTeam;
    }
    setLeftTeam(leftTeam) {
        this.leftTeam = leftTeam;
    }
    getRightTeam() {
        return this.rightTeam;
    }
    setRightTeam(rightTeam) {
        this.rightTeam = rightTeam;
    }
    getCurrentGame() {
        return this.currentGame;
    }
    setCurrentGame(currentGame) {
        this.currentGame = currentGame;
    }
    getClock() {
        return this.clock;
    }
    setClock(clock) {
        this.clock = clock;
    }
    getBestOf() {
        return this.bestOf;
    }
    setBestOf(bestOf) {
        this.bestOf = bestOf;
    }
    getIsOvertime() {
        return this.isOvertime;
    }
    setIsOvertime(isOvertime) {
        this.isOvertime = isOvertime;
    }
    getIsReplay() {
        return this.isReplay;
    }
    setIsReplay(isReplay) {
        this.isReplay = isReplay;
    }
    getSpectatorTarget() {
        return this.spectatorTarget;
    }
    setSpectatorTarget(spectatorTarget) {
        this.spectatorTarget = spectatorTarget;
    }
    getHasWinner() {
        return this.hasWinner;
    }
    setHasWinner(hasWinner) {
        this.hasWinner = hasWinner;
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        this.winner = winner;
    }
}