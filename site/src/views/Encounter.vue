
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10" rounded="lg">
          <h1>Dice Roller</h1>
          <v-flex class="pa-3 d-inline-flex flex-wrap">
            <v-btn @click="Roll(4)">d1</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex flex-wrap">
            <v-btn @click="Roll(6)">d6</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex flex-wrap">
            <v-btn @click="Roll(8)">d8</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex flex-wrap">
            <v-btn @click="Roll(10)">d10</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex flex-wrap">
            <v-btn @click="Roll(12)">d12</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex flex-wrap">
            <v-btn @click="Roll(20)">d20</v-btn>
          </v-flex>
          <v-flex class="pa-3 d-inline-flex flex-wrap">
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
            <v-card-title>{{ enemy.Name }}</v-card-title>

            <v-row>
              <v-col>
                <v-card-subtitle>
                  {{ enemy.Description }}
                </v-card-subtitle>
                <v-card-subtitle>
                  Weaknesses: {{ enemy.Weakness }}
                </v-card-subtitle>
              </v-col>
              <v-col>
                <v-row class="px-3">
                  <v-card-text>
                    Attacks
                    <pre class="px-4">{{ enemy.Attacks }}</pre>
                  </v-card-text>
                </v-row>
              </v-col>
            </v-row>

            <v-row class="px-3">
              <v-col>
                <v-text-field
                  label="HP"
                  type="number"
                  v-model="enemy.HP"
                  @change="UpdateEncounter()"
                ></v-text-field>
                <v-flex class="d-flex flex-wrap">
                  <v-btn @click="Attack(enemy)" class="my-2 mr-2">Attack</v-btn>
                  <v-text-field label="Damage Amount" v-model="DamageAmount" />
                </v-flex>
                  <h4>Elemental Damage</h4>
                <v-sheet class="d-flex flex-wrap">
                  <v-flex class="mx-5">
                    <v-checkbox label="Holy" v-model="Holy"></v-checkbox>
                  </v-flex>
                  <v-flex class="mx-5">
                    <v-checkbox label="Dark" v-model="Dark"></v-checkbox>
                  </v-flex>
                  <v-flex class="mx-5">
                    <v-checkbox label="Air" v-model="Air"></v-checkbox>
                  </v-flex>
                  <v-flex class="mx-5">
                    <v-checkbox label="Earth" v-model="Earth"></v-checkbox>
                  </v-flex>
                  <v-flex class="mx-5">
                    <v-checkbox label="Fire" v-model="Fire"></v-checkbox>
                  </v-flex>
                  <v-flex class="mx-5">
                    <v-checkbox label="Ice" v-model="Ice"></v-checkbox>
                  </v-flex>
                  <v-flex class="mx-5">
                    <v-checkbox
                      label="Lightning"
                      v-model="Lightning"
                    ></v-checkbox>
                  </v-flex>
                  <v-flex class="mx-5">
                    <v-checkbox label="Water" v-model="Water"></v-checkbox>
                  </v-flex>
                </v-sheet>
              </v-col>
              <v-col>
                <v-text-field
                  label="Armor"
                  type="number"
                  v-model="enemy.Armor"
                  @change="UpdateEncounter()"
                ></v-text-field>

                <v-btn @click="ChangeArmor(enemy, 1)">Increase Armor</v-btn>
                <v-btn @click="ChangeArmor(enemy, -1)">Ding Armor</v-btn>
              </v-col>
            </v-row>
            <v-btn
              class="mx-5"
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
import Item from "@/models/Item";
import Randomizer from "@/services/Randomizer";
import reference from "../reference.json";

@Component
export default class Encounter extends Vue {
  public RollResult = "";
  public encounterEnemies: Enemy[] = [];

  public Holy = false;
  public Dark = false;
  public Earth = false;
  public Air = false;
  public Fire = false;
  public Ice = false;
  public Lightning = false;
  public Water = false;

  public DamageAmount = 1;

  public GetElements(): string[]{
    const text: string[] = [];
    if(this.Holy)
      text.push("Holy");
    if(this.Dark)
      text.push("Dark");
    if(this.Earth)
      text.push("Earth");
    if(this.Air)
      text.push("Air");
    if(this.Fire)
      text.push("Fire");
    if(this.Ice)
      text.push("Ice");
    if(this.Lightning)
      text.push("Lightning");
    if(this.Water)
      text.push("Water");

      return text;
  }

  public Loot: Item[] = [];

  public Attack(enemy: Enemy){
    let damage = this.DamageAmount;
    const elements = this.GetElements();
    for(let i = 0; i<elements.length; i++){
        if(enemy.Weakness.includes(elements[i])){
          damage+=2;
          break;
        }
    }

    enemy.HP -= damage;
    if(enemy.HP<=0) //Enemy is killed
    {
      debugger;
      const fullEnemy = reference.Bestiary.find(x=>x.Name===enemy.Name);
      let lootValue = parseInt(fullEnemy?.HP || "0") + parseInt(fullEnemy?.Armor || "0");

      while(lootValue>=0){
        const item: Item = Randomizer.GetRandomElement<Item>(reference.Items);  
        this.Loot.push(item);
        lootValue -= parseInt(item.Cost);
      }

      enemy.HP = 0;
    }
  }

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

  public ChangeArmor(enemy: Enemy, change: number): void {
    const newArmor = parseInt(enemy.Armor.toString()) + change;
    if (newArmor >= 0) {
      enemy.Armor = newArmor;
      this.UpdateEncounter();
    }
  }

  public Delete(enemy: Enemy): void {
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
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>