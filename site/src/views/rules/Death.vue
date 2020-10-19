
<template>
  <div>
    <v-row>
      <h4>Death</h4>
    </v-row>
    <v-row>
    <ul>
      <li>You cannot go below 0 HP regardless of how much damage you take</li>
      <li>If you reach 0, you have been knocked out but are not dead yet</li>
      <li>
        At the end of the battle, roll with no modifier
        <ul>
          <li>Success ⇒ You awaken with 1d8+1 HP</li>
          <li>
            Minor Success ⇒ You awaken with 1 HP and choose one of the following negative consequences
            <ul>
              <li>A stat goes down permanently by 1</li>
              <li>You forget a move</li>
            </ul>
          </li>
          <li>Fail ⇒ You die</li>
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
          public name = 'Death';
    }
</script>
