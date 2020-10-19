
<template>
  <div>
    <v-row>
      <h4>Armor</h4>
    </v-row>
    <v-row>
    <ul>
      <li>Armor can have a rating of +0 to +2</li>
      <li>Rating indicates how much to subtract from damage unless struck with piercing damage</li>
      <li>Armor can also have <router-link to="/rules/Elements">Elemental</router-link> attributes</li>
    </ul>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rules extends Vue {
  public name = "Armor";
}
</script>
