
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10 ma-10" rounded="lg">
          <v-row>
            <v-btn @click="GenerateNPC()">Generate</v-btn>
          </v-row>
          <v-row>
              <v-card v-for="npc in npcs" :key="npc.Name" width="250">
                <v-card-title>
                  {{ npc.FirstName }} {{ npc.LastName }}
                </v-card-title>
                <v-card-subtitle>{{ Gender(npc.Gender) }}</v-card-subtitle>
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
}
</script>

