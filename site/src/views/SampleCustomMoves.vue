
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10" rounded="lg">
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
            <v-data-table
              :items="moves"
              :headers="headers"
              :search="search"
            >
            </v-data-table>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import reference from "../reference.json";

@Component
export default class SampleCustomMoves extends Vue {
  public headers = [
    { text: "Name", value: "Name" },
    { text: "Description", value: "Description" },
  ];
  public search = "";

  public get moves() {
    return reference.Sample_Custom_Moves;
  }
}
</script>

