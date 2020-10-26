import { uniqueNamesGenerator, colors, animals, countries, names, starWars, adjectives } from 'unique-names-generator';
import { nameByRace } from "fantasy-name-generator";

export default class NameGenerator {
    static FantasyRaces = [
        "angel",
        "cavePerson",
        "darkelf",
        "demon",
        "dragon",
        "drow",
        "dwarf",
        "elf",
        "fairy",
        "gnome",
        "goblin",
        "halfdemon",
        "halfling",
        "highelf",
        "highfairy",
        "human",
        // "ogre",
        // "orc"
    ];

    static CapitalizeFirstLetter(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }

    static GetRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static GetRandomBool(): boolean {
        return this.GetRandomInt(2) == 0;
    }

    static GenerateName(): string {
        if (this.GetRandomInt(2) == 0) {
            return this.CapitalizeFirstLetter(uniqueNamesGenerator({ dictionaries: [colors, animals, countries, names, starWars, adjectives], length: 1 }).split(" ")[0]);
        }
        else {
            const randomRace = this.FantasyRaces[this.GetRandomInt(this.FantasyRaces.length)];
            const gender = this.GetRandomBool() ? "male" : "female";
            return String(nameByRace(randomRace, { gender: gender }));
        }

    }

    public static GenerateFirstName(): string {
        return this.GenerateName();
    }

    public static GenerateLastName(): string {
        return this.GenerateName();
    }
}