<template>
  <div>
    <v-row>
      <h4>Leveling Up</h4>
    </v-row>
    <v-row>
    <ul>
      <li>Player gains an XP for every Failed roll</li>
      <li>A character gains a new level every time they earn 6 XP</li>
      <li>Leveling-up happens immediately (if in combat, wait until battle ends).  Subtract 6 XP, raise level by 1, then choose one of the following actions:
        <ul>
          <li>Gain 1d4 HP for Max and Current (20 Max)</li>
          <li>Gain 1d4 SP for Max and Current (20 Max)</li>
          <li>Add +1 to a stat (+3 Max and upgrading Might/Spirit does not increase HP/SP)</li>
          <li>Gain a move from character sheet</li>
        </ul>

      </li>
      <li>There is no maximum level, but the player and GM should work together to retire that character and create a new one if there class mastery move is obtained and all stats.</li>
    </ul>
    </v-row>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Rules extends Vue{
          public name = 'Leveling Up';
    }
</script>
