import { uniqueNamesGenerator, colors, animals, names } from 'unique-names-generator';
import { nameByRace } from "fantasy-name-generator";
import { Gender } from '@/enumerations/Gender';
import Randomizer from '@/services/Randomizer';
import humanNames from 'human-names';

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
        "ogre",
        "orc"
    ];

    static dictionaries = [colors, animals, names];


    static GenerateName(gender: Gender): string {
        const numberOfDictionaries = this.dictionaries.length;
        const choice = Randomizer.GetRandomInt(numberOfDictionaries+2);

        if(choice==numberOfDictionaries){
            const randomRace = this.FantasyRaces[Randomizer.GetRandomInt(this.FantasyRaces.length)];
            const genderText = gender==Gender.Female ? "female" : "male";
            return String(nameByRace(randomRace, { gender: genderText }));
        }
        else if(choice == numberOfDictionaries+1){
            return gender==Gender.Female ? humanNames.femaleRandom() : humanNames.maleRandom();
        }
        else{
            return this.GetUniqueName(this.dictionaries[choice]);
        }
    }

    static GetUniqueName(choice: string[]): string{
        return uniqueNamesGenerator(
            {
                dictionaries: [choice], 
                length: 1,
                style: 'capital'
            }).split(" ")[0];                
    }
    
    public static GenerateFirstName(gender: Gender): string {
        return this.GenerateName(gender);
    }

    public static GenerateLastName(): string {
        return this.GenerateName(Randomizer.GetRandomBool() ? Gender.Female : Gender.Male);
    }
}