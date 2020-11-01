import NPC from '@/models/NPC';
import NameGenerator from '@/services/NameGenerator'
import GenderGenerator from '@/services/GenderGenerator';

export default class NPCGenerator{
    static Generate(): NPC{
        const npc = new NPC();
        npc.Gender = GenderGenerator.GetGender();
        npc.FirstName = NameGenerator.GenerateFirstName(npc.Gender);
        npc.LastName = NameGenerator.GenerateLastName();
        
        return npc;
    }
}