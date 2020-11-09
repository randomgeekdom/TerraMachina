
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10" rounded="lg">
          <h1>Dice Roller</h1>
          <v-flex class="pa-3 d-inline-flex">
            <v-btn @click="Roll(4)">d1</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex">
            <v-btn @click="Roll(6)">d6</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex">
            <v-btn @click="Roll(8)">d8</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex">
            <v-btn @click="Roll(10)">d10</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex">
            <v-btn @click="Roll(12)">d12</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex">
            <v-btn @click="Roll(20)">d20</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex">
            <h4 v-if="RollResult">Roll Result: {{ RollResult }}</h4>
          </v-flex>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10" rounded="lg">
          <h1>Current Encounter</h1>
          <v-card
            class="ma-2 pa-4 text-no-wrap"
            v-for="(enemy, index) in encounterEnemies"
            :key="`enemy-${index}`"
          >
            <v-row class="pa-3">
              <h2>{{ enemy.Name }}</h2>
            </v-row>
            <v-row class="pa-3">
              <v-card-subtitle>
                {{ enemy.Description }}
              </v-card-subtitle>
              <v-card-subtitle>
                Weaknesses: {{ enemy.Weakness }}
              </v-card-subtitle>
            </v-row>
            <v-row class="pa-3">
              <v-col>
                <label>HP</label>
                <v-text-field
                  type="number"
                  v-model="enemy.HP"
                  @change="UpdateEncounter()"
                ></v-text-field>
              </v-col>
              <v-col>
                <label>Armor</label>
                <v-text-field
                  type="number"
                  v-model="enemy.Armor"
                  @change="UpdateEncounter()"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="pa-3">
              <label>Attacks</label>
              <pre class="pa-4" >{{ enemy.Attacks }}</pre>
            </v-row>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
                @click="Delete(enemy)"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Enemy from "@/models/Enemy";
import Randomizer from "@/services/Randomizer";

@Component
export default class Encounter extends Vue {
  public RollResult = "";
  public encounterEnemies: Enemy[] = [];
  public created() {
    const enemyString = localStorage.getItem("encounterEnemies");
    if (enemyString) {
      this.encounterEnemies = JSON.parse(enemyString);
    }
  }

  public UpdateEncounter() {
    localStorage.setItem(
      "encounterEnemies",
      JSON.stringify(this.encounterEnemies)
    );
  }

  public Delete(enemy: Enemy): void{
    const i = this.encounterEnemies.indexOf(enemy);
    this.encounterEnemies.splice(i, 1);
    this.UpdateEncounter();
  }

  public Roll(die: number) {
    this.RollResult = (Randomizer.GetRandomInt(die) + 1).toString();
  }
}
</script>
<style>
pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>