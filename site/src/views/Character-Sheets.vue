<template>
<div>
  
  <v-row v-show="IsMobile()" class='no-print'>
    
              <v-select :items="list" v-model="selectedRoute" item-text="display" item-value="link" @change="RouteTo()" v-show="this.IsMobile()">

              </v-select>
  </v-row>
   <v-row>
          <v-col cols="2" v-show="!IsMobile()" class='no-print'>
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="item in list" :key="item.link" :to="item.link" link>
                  <v-list-item-content>
                      {{item.display}}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-10"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
</div>
       
</template>

<script lang="ts">

    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Rules extends Vue{
          [x: string]: any;
          public name = 'Character Sheets';
          public list = [
            {link: "/character-sheets/basic", display: "Basic Character Sheet"},
          ] ;
          public selectedRoute = {};

          IsMobile(): boolean {
              return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm;
          }

          created(){
            this.selectedRoute = this.list[0];
          }

          public RouteTo(){
            const link = this.selectedRoute;
            if(link){
              this.$router.push(link);
            }
          }
    }
</script>
