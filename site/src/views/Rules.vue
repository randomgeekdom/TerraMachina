<template>
  <div>
    <v-row class="d-sm-none">
      <v-col>
        <v-select
          :items="list"
          v-model="selectedRoute"
          item-text="display"
          item-value="link"
          @change="RouteTo()"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="d-none d-sm-block">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item
              v-for="item in list"
              :key="item.link"
              :to="item.link"
              link
            >
              <v-list-item-content>
                {{ item.display }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg" class="pa-10">
          <router-view></router-view>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rules extends Vue {
  public name = "Rules";
  public list = [
    { link: "/rules/Moves", display: "Moves" },
    { link: "/rules/LevelingUp", display: "Leveling Up" },
    { link: "/rules/Death", display: "Death" },
    { link: "/rules/Stats", display: "Stats" },
    { link: "/rules/Classes", display: "Classes" },
    { link: "/rules/Status-Effects", display: "Status Effects" },
    { link: "/rules/Elements", display: "Elements" },
    { link: "/rules/Money", display: "Money" },
    { link: "/rules/Armor", display: "Armor" },
    { link: "/rules/Weapons", display: "Weapons" },
  ];
  public selectedRoute = {};

  created() {
    this.selectedRoute = this.list[0];
  }

  public RouteTo() {
    const link = this.selectedRoute;
    if (link) {
      this.$router.push(link);
    }
  }
}
</script>
