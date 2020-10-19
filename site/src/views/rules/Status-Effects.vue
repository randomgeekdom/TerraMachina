
<template>
  <div>
    <v-row>
      <h4>Status Effects</h4>
    </v-row>
    <v-row>
      <ul>
        <li>
          All status effects have the following: roll a d6 with move. On a 1-3,
          bad effect. On a 6, status goes away
        </li>
        <li>Each status effect has an item that makes it go away</li>
        <li>
          Status Effects (Name; d6 1-3 effect; item cured by)
          <ul>
            <li>Bleed; Take 1 damage; Bandage</li>
            <li>
              Blind; Automatic miss on anything requiring sight; Eye Drops
            </li>
            <li>Burn; Take d4-1 damage; Ointment</li>
            <li>Mania; Attack an ally instead of a move; Medication</li>
            <li>
              Paralysis; Turn is forfeited as if a 6 was rolled (no XP);
              Stimulant
            </li>
            <li>Poison; Take 1 Damage; Antidote</li>
            <li>Scared; will run away from the fight; Adrenaline</li>
          </ul>
        </li>
      </ul>
    </v-row>
  </div>
</template>







<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rules extends Vue {
  public name = "Status Effects";
}
</script>
