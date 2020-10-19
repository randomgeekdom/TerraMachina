
<template>
  <div>
    <v-row>
      <h4>Money</h4>
    </v-row>
    <v-row>
    <ul>
      <li>The monetary unit is bux</li>
    </ul>
    </v-row>
  </div>
</template>



<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Rules extends Vue{
          public name = 'Money';
    }
</script>
