export = Player;

class Player {
    private name: string;
    private score: number;
    private goals: number;
    private shots: number;
    private assists: number;
    private saves: number;

    constructor(name: string, score: number, goals: number, shots: number, assists: number, saves: number) {
        this.name = name;
        this.score = score;
        this.goals = goals;
        this.shots = shots;
        this.assists = assists;
        this.saves = saves;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score;
    }
    getGoals() {
        return this.goals;
    }
    setGoals(goals) {
        this.goals = goals;
    }
    getShots() {
        return this.shots;
    }
    setShots(shots) {
        this.shots = shots;
    }
    getAssists() {
        return this.assists;
    }
    setAssists(assists) {
        this.assists = assists;
    }
    getSaves() {
        return this.saves;
    }
    setSaves(saves) {
        this.saves = saves;
    }
}