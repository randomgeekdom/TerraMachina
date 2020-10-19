  
<template>
  <v-app id="inspire">
    <v-app-bar class='no-print'
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <router-link
          class="mr-10"
          to="/"
        >
        <img src="./assets/logo.png"/>
        </router-link>

        <v-btn text to="/">
          Home
        </v-btn>
        <v-btn text to="/rules">
          Rules
        </v-btn>

        <v-spacer></v-spacer>

        <!-- <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive> -->
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
          <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
