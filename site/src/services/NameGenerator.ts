import { uniqueNamesGenerator, colors, animals, countries, names, starWars, adjectives } from 'unique-names-generator';
import { nameByRace } from "fantasy-name-generator";
import { Gender } from '@/enumerations/Gender';

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

    static GenerateName(gender: Gender): string {
        if (this.GetRandomInt(2) == 0) {
            return this.CapitalizeFirstLetter(uniqueNamesGenerator({ dictionaries: [colors, animals, countries, names, starWars, adjectives], length: 1 }).split(" ")[0]);
        }
        else {
            const randomRace = this.FantasyRaces[this.GetRandomInt(this.FantasyRaces.length)];
            const genderText = gender==Gender.Female ? "female" : "male";
            return String(nameByRace(randomRace, { gender: genderText }));
        }

    }

    public static GenerateFirstName(gender: Gender): string {
        return this.GenerateName(gender);
    }

    public static GenerateLastName(): string {
        return this.GenerateName(this.GetRandomBool() ? Gender.Female : Gender.Male);
    }
}