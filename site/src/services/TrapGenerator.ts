import Randomizer from './Randomizer';

export default class TrapGenerator {
    static traps = [
        "A burst of electricity strikes {target} for {damage} Lightning damage.",
        "A water jet splashes {target} for {damage} Water damage.",
        "An fireball hits {target} for {damage} Fire damage.",
        "A spear of ice hits {target} for {damage} Ice damage.",
        "A shot of rocks hits {target} for {damage} Earth damage.",
        "A wind tunnel hits {target} for {damage} Air damage.",
        "A blast of light hits {target} for {damage} Holy damage.",
        "A blast of dark energy hits {target} for {damage} Dark damage.",

        "A bunch of poison arrows shoot {target} for {damage} damage.  Causes poison.",
        "A bunch of darts hit {target} for {damage} damage.  Causes paralysis.",
    ];

    static damageDice = [4, 6, 8, 10, 12];

    static targets = [
        "all characters",
        "you",
        "your allies",
        "one ally"
    ];

    static Generate(): string {
        var target = Randomizer.GetRandomElement(this.targets);
        var trap = Randomizer.GetRandomElement(this.traps);
        var damageDie = Randomizer.GetRandomElement(this.damageDice);

        return trap.replace("{target}", target).replace("{damageDie}", '1d' + damageDie);
    }
}