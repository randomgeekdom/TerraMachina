  
<template>
  <v-app id="inspire">
    <v-app-bar class="no-print" app color="white" flat hide-on-scroll>
      <v-container class="py-0 fill-height">
        <router-link class="mr-10" to="/">
          <img src="./assets/logo.png" />
        </router-link>

        <div class="d-none d-sm-block">
          <v-btn v-for="link in links" :key="link.page" :to="link.route" text>
            {{ link.page }}
          </v-btn>
        </div>

        <div class="d-sm-none">
          <v-select
            :items="links"
            item-text="page"
            item-value="route"
            v-model="selectedLink"
            @change="routeTo()"
          ></v-select>
        </div>

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
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rules extends Vue {
  public links = [
    { page: "Home", route: "/" },
    { page: "Rules", route: "/Rules" },
  ];

  public selectedLink = "";

  public routeTo() {
    if (this.selectedLink) {
      this.$router.push(this.selectedLink);
    }
  }

  public created() {
    this.selectedLink = this.links[0].route;
  }
}
</script>
