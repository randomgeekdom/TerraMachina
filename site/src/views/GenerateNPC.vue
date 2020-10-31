
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10 ma-10" rounded="lg">
          <v-row>
            <v-btn @click="GenerateNPC()">Generate</v-btn>
          </v-row>
          <v-row>
            <v-card v-for="npc in npcs" :key="npc.Name" width="250" class="ma-5">
              <v-card-title>
                {{ npc.FirstName }} {{ npc.LastName }}
              </v-card-title>
              <v-card-subtitle>{{ Gender(npc.Gender) }}</v-card-subtitle>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
                @click="Delete(npc)"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
            </v-card>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import * as NPCGenerator from "@/services/NPCGenerator";
import NPC from "@/models/NPC";
import { Gender } from "@/enumerations/Gender";

@Component
export default class GenerateNPC extends Vue {
  public npcs: NPC[] = [];

  public Gender(gender: Gender): string {
    return gender == Gender.Female ? "Female" : "Male";
  }

  public GenerateNPC(): void {
    this.npcs.push(NPCGenerator.default.Generate());
  }

  public Delete(npc: NPC): void {
    const index = this.npcs.indexOf(npc, 0);
    if (index > -1) {
      this.npcs.splice(index, 1);
    }
  }
}
</script>

