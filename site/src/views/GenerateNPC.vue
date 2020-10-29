
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10 ma-10" rounded="lg">
          <v-row>
            <v-btn @click="GenerateNPC()">Generate</v-btn>
          </v-row>
          <v-row>
            <v-card>
              <v-card-title>
                {{ npc.FirstName }} {{ npc.LastName }}
              </v-card-title>
              <v-card-subtitle>{{ Gender }}</v-card-subtitle>
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
  public npc = new NPC();

  public get Gender(): string {
    return this.npc.Gender == Gender.Female ? "Female" : "Male";
  }

  public GenerateNPC(): void {
    this.npc = NPCGenerator.default.Generate();
  }
}
</script>

