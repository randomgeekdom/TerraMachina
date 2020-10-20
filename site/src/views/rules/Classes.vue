
<template>
  <div>
    <v-row>
      <h4>Classes</h4>
    </v-row>
    <v-row>
    <ul>
      <li>In addition to the Basic Character Sheet, each player will select a class that will determine starting equipment and how they will progress when <router-link to="/rules/levelingup">leveling up</router-link>.</li>
      <li>Each class has a Class Mastery Move that can only be used once all other class moves have been unlocked</li>
    </ul>
    </v-row>
  </div>
</template>



<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Rules extends Vue{
          public name = 'Stats';
    }
</script>
