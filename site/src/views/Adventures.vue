
<template>
  <div>
    <v-row>
        <v-card class="pa-10" rounded="lg">
          <v-card-title>
            Adventures
          </v-card-title>
					<v-card-text>
              Below you will find a links to different adventures that can be played with the Terra Machina system.  Though, they are written in such generic way, that they can be easily transferred to any sytem.  They are meant as guiding tools to help the GM run their game.  
					</v-card-text>
  
					<v-card-text>
						<a href="/TheMalusLine.pdf" target="_blank">The Malus Line</a>: The players defy destiny to save a kingdom.
					</v-card-text>
        </v-card>
    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Adventures extends Vue {
}
</script>

