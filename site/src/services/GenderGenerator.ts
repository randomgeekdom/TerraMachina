import { Gender } from '@/enumerations/Gender';
import Randomizer from '@/services/Randomizer';

export default class GenderGenerator {
    public static GetGender(): Gender {
        return Randomizer.GetRandomBool() ? Gender.Female : Gender.Male;
    }
}
