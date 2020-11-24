  
<template>
  <v-app id="inspire">
    <v-app-bar class="no-print" app color="#177C88" >
      
      <v-app-bar-nav-icon color="white" class="d-xl-none" @click="drawer = true"></v-app-bar-nav-icon>
      <v-container class="py-0 fill-height">
        <router-link class="mr-10" to="/">
          <img height="50" src="./assets/logo.png" />
        </router-link>

        <div class="d-none d-xl-block">
          <v-btn color="white" v-for="link in links" :key="link.page" :to="link.route" text>
            {{ link.page }}
          </v-btn>
        </div>


        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

 <v-navigation-drawer class="d-xl-none"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.page" :to="link.route">
            <v-list-item-title>
              {{link.page}}
              </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-main class="grey lighten-3 my-3">
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
    { page: "Items", route: "/items" },
    { page: "Bestiary", route: "/bestiary" },
    { page: "Encounter", route: "/encounter" },
    // { page: "Adventures", route: "/adventures" },
    { page: "Sample Custom Moves", route: "/sample-custom-moves" },
    { page: "NPC Generator", route: "/generate-npc" },
    { page: "Trap Generator", route: "/generate-trap" }
  ];

  public drawer = false;

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
