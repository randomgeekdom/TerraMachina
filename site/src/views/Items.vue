
<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-sheet class="pa-10" rounded="lg">
          <h1>Items</h1>
          <v-row>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-row>
          <v-row>
            <v-data-table :items="items" :headers="headers" :search="search">
              // eslint-disable-next-line
              <template v-slot:[`item.Encounter`]="{ item }">
                <v-btn @click="AddToEncounter(item)" title="Add to Encounter Loot"><v-icon>mdi-plus</v-icon></v-btn>
              </template>
            </v-data-table>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="3">
        <v-sheet class="pa-10" rounded="lg">
          <v-btn @click="GetRandomItem()">Get Random Item</v-btn>
          <v-btn v-show="!!randomItem.Name" @click="AddToEncounter(randomItem)">Add Item to Encounter</v-btn>
          <div v-if="randomItem.Name">  
              <v-subheader>Name: {{randomItem.Name}}</v-subheader>
              <v-subheader>Description: {{randomItem.Description}}</v-subheader>
              <v-subheader>Cost: {{randomItem.Cost}}</v-subheader>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import reference from "../reference.json";
import Randomizer from '@/services/Randomizer';
import Item from '@/models/Item';

@Component
export default class Items extends Vue {
  public name = "Home";
  public headers = [
    { text: "Name", value: "Name" },
    { text: "Description", value: "Description" },
    { text: "Cost", value: "Cost" },
    { text: "", value: "Encounter" },
  ];
  public search = "";
  public randomItem = new Item();

  public GetRandomItem(): void{
    this.randomItem = Randomizer.GetRandomElement<Item>(this.items);
  }

  public get items() {
    return reference.Items;
  }
  

  public AddToEncounter(item: Item) {
    const lootString = localStorage.getItem("encounterLoot");
    if (lootString) {
      const enemies = JSON.parse(lootString);
      enemies.push(item);
      localStorage.setItem("encounterLoot", JSON.stringify(enemies));
    }
  }
}
</script>

