
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10" rounded="lg">
          <v-row>
            <v-btn @click="GenerateName()">Generate</v-btn>
          </v-row>
          <v-row>
            <h2>{{ this.FirstName }}</h2>
          </v-row>
          <v-row>
            <h2>{{ this.LastName }}</h2>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import * as NameGenerator from "../services/NameGenerator";

@Component
export default class GenerateNPC extends Vue {
  public FirstName = "";
  public LastName = "";

  public GenerateName(): void {
    this.FirstName = NameGenerator.default.GenerateFirstName();
    this.LastName = NameGenerator.default.GenerateLastName();
  }
}
</script>

