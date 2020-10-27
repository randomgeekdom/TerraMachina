import { Gender } from '@/enumerations/Gender';
import NPC from '@/models/NPC';
import * as NameGenerator from '@/services/NameGenerator'

export default class NPCGenerator{
    static Generate(): NPC{
        const npc = new NPC();
        npc.Gender = this.GetRandomBool() ? Gender.Female : Gender.Male;
        npc.FirstName = NameGenerator.default.GenerateFirstName(npc.Gender);
        npc.LastName = NameGenerator.default.GenerateLastName();
        
        return npc;
    }
    


    static GetRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }
    static GetRandomBool(): boolean {
        return this.GetRandomInt(2) == 0;
    }
}