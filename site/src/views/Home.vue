
<template>
         <v-row>
          <v-col cols="12">
            <v-sheet class="pa-10" rounded="lg">
              <p><i>Over the course of millenia, what began as a world of fantasy and myth advances beyond its ages of primitivity, agriculture, conquest, exploration, and industry.  It is now an age of technology.  Life transpires on the spectrum of science and sorcery.  It is a world where the gods of the machine coexist with the gods of the natural world.  Welcome to Machina World. </i> </p>
              <p>Machina World is a tabletop RPG based loosely on Dungeon World by Sage LaTorra and Adam Koebel.  It imagines a Tolkienesque world where time has passed to the point where technology is just as powerful as magic.  Taking inspiration from Japanese roleplaying video games of the 32-bit era, it is a unique experience that hopes to combine the best elements of science fiction, fantasy, and action.</p>
            </v-sheet>
          </v-col>
        </v-row>
</template>


<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Rules extends Vue{
          public name = 'Home';
    }
</script>

