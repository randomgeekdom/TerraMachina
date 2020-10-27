
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10" rounded="lg">
          <v-row>
            <v-btn @click="GenerateNPC()">Generate</v-btn>
          </v-row>
          <v-row>
            <h2>{{ npc.FirstName }}</h2>
          </v-row>
          <v-row>
            <h2>{{ npc.LastName }}</h2>
          </v-row>
          <v-row>
            <h2>{{ Gender }}</h2>
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
import { Gender } from '@/enumerations/Gender';

@Component
export default class GenerateNPC extends Vue {
  public npc = new NPC();

  public get Gender(): string{
    return this.npc.Gender == Gender.Female ? "Female" : "Male";
  }

  public GenerateNPC(): void {
    this.npc = NPCGenerator.default.Generate();
  }
}
</script>

