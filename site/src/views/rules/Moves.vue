<template>
  <div>
    <v-row>
      <h4>Moves</h4>
    </v-row>
    <v-row>
    <ul>
      <li>Moves are the actions a character may take in or out of combat</li>
      <li>There are a set of moves that any character may take that are denoted in the <router-link to="/character-sheets/basic">Basic Character Sheet</router-link> </li>
      <li>A move that requires a roll but no SP cost can only be done once out of combat within a set location</li>
      <li>Each class has its own set of moves</li>
      <li>Certain moves have more than one level that can be obtained only after the first level is obtained</li>
      <li>Unless otherwise indicated, a move consists of a roll of a d20 + a stat and will have the following results:
        <ul>
          <li>18+ ⇒ Success</li>
          <li>10-17 ⇒ Minor Success (which means, you only partially succeed or you fully succeed but there are consequences; in combat, this usually means a counterattack)</li>
          <li>9 or less ⇒ Fail (but the character gains an XP)</li>
        </ul>

      </li>
      <li>Some moves require SP to perform.  The SP is spent regardless if the move is successful or not.</li>
      <li>Unless otherwise indicated, any move that causes an effect cannot stack on that effect</li>
    </ul>
    </v-row>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Rules extends Vue{
          public name = 'Moves';
    }
</script>
