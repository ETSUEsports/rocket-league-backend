export class Caster{
    private name: string;
    private image: string;
    private twitter: string;
    private twitch: string;

    constructor(name: string) {
        this.name = name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public setTwitter(twitter: string): void {
        this.twitter = twitter;
    }

    public setTwitch(twitch: string): void {
        this.twitch = twitch;
    }

    public getName(): string {
        return this.name;
    }

    public getImage(): string {
        return this.image;
    }

    public getTwitter(): string {
        return this.twitter;
    }

    public getTwitch(): string {
        return this.twitch;
    }

}