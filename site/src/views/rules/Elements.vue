<template>
  <div>
    <v-row>
      <h4>Elements</h4>
    </v-row>
    <v-row>
    <ul>
      <li>Attacks may have elemental damage attached to them</li>
      <li>Each element has an opposing element (1-1 relationship) where an attack will add +2 damage against an opposing element.  The element pairs are as follows:
        <ul>
          <li>Earth -- Air</li>
          <li>Fire -- Ice</li>
          <li>Water -- Lightning</li>
          <li>Holy -- Darkness</li>
        </ul>

      </li>
    </ul>
    </v-row>
  </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Rules extends Vue{
          public name = 'Elements';
    }
</script>
