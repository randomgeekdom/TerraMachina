
<template>
  <div>
    <v-flex class="d-flex flex-wrap">
        <v-card class="pa-10 ma-2"  width="70%" rounded="lg">
          <v-card-title>Items</v-card-title>
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
            </v-data-table>
          </v-row>
        </v-card>
        <v-card class="pa-10 ma-2" rounded="lg" width="25%" >
          <v-btn @click="GetRandomItem()">Get Random Item</v-btn>
         
          <div v-if="randomItem.Name">  
              <v-subheader>Name: {{randomItem.Name}}</v-subheader>
              <v-subheader>Description: {{randomItem.Description}}</v-subheader>
              <v-subheader>Cost: {{randomItem.Cost}}</v-subheader>
          </div>
        </v-card>
    </v-flex>
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
  

  // public AddToEncounter(item: Item) {
  //   const lootString = localStorage.getItem("encounterLoot");
  //   if (lootString) {
  //     const enemies = JSON.parse(lootString);
  //     enemies.push(item);
  //     localStorage.setItem("encounterLoot", JSON.stringify(enemies));
  //   }
  // }
}
</script>

