export default class Randomizer{
    static GetRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }
    static GetRandomBool(): boolean {
        return this.GetRandomInt(2) == 0;
    }
}