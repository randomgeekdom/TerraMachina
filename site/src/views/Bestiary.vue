
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
              :items="enemies"
              :headers="headers"
              :search="search"
              :expanded.sync="expanded"
              single-expand
              show-expand
            >
              <!-- <template v-slot:item.Attacks="{item}">
                  <pre>{{item.Attacks}}</pre>
              </template> -->

              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                  <br/>
                  <pre>{{ item.Attacks }}</pre>
                  <br/>
                </td>
              </template>
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
export default class Bestiary extends Vue {
  public headers = [
    { text: "Name", value: "Name" },
    { text: "Description", value: "Description" },
    { text: "HP", value: "HP" },
    { text: "Armor", value: "Armor" },
    // { text: "Attacks", value: "Attacks" },
  ];
  public search = "";
  public expanded = {};

  public get enemies() {
    return reference.Bestiary;
  }
}
</script>

