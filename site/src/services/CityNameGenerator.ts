import GenderGenerator from './GenderGenerator';
import NameGenerator from './NameGenerator';
import Randomizer from './Randomizer';

export default class CityNameGenerator {
    static prefixes = [
        "Saint ",
        "San ",
        "Fort ",
        "New ",
        "Old ",
        "North ",
        "South ",
        "East ",
        "West "];
    static suffixes = [
        " Town",
        "ville",
        "ton",
        "polis",
        " City",
        "wall",
        "grad"];
    static Generate(): string {
        debugger;
        const name = NameGenerator.GenerateName(GenderGenerator.GetGender());

        switch (Randomizer.GetRandomInt(3)) {
            case 0: //suffix
                return name + Randomizer.GetRandomElement(this.suffixes);

            case 1: //prefix
                return Randomizer.GetRandomElement(this.prefixes) + name;

            default:
                return name;
        }
    }
}