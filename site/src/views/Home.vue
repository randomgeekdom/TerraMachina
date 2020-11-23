
<template>
	<div>
		<v-flex class="d-flex flex-wrap">
			<v-card width="1100" class="ma-2">
				<div class="ma-2 pa-2">
					<v-card-title>
						Updates
					</v-card-title>
					<v-card-text>
						Still in a pre-alpha state...
					</v-card-text>
				</div>
			</v-card>
			<v-card cols="12" rounded="lg" width="400" class="ma-2">
				<v-card-title>About</v-card-title>
        
					<v-card-text>
						<i
							>Over the course of millenia, what began as a world of fantasy and
							myth advances beyond its ages of primitivity, agriculture,
							conquest, exploration, and industry. It is now an age of
							technology. Life transpires on the spectrum of science and
							sorcery. It is a world where the gods of the machine coexist with
							the gods of the natural world. Welcome to Terra Machina.
						</i>
					</v-card-text>
					<v-card-text>
						Terra Machina is a tabletop RPG based loosely on Dungeon World by
						Sage LaTorra and Adam Koebel. It imagines a Tolkienesque world where
						time has passed to the point where technology is just as powerful as
						magic. Taking inspiration from Japanese roleplaying video games of
						the 32-bit era, it is a unique experience that hopes to combine the
						best elements of science fiction, fantasy, and action.
					</v-card-text>

					<v-card-text>
						<a href="/Terra-Machina.pdf" target="_blank">Download Rulebook</a>
					</v-card-text>
					<v-card-text>
            <a href="/Terra-Machina-Reference-Guide.xlsx" target="_blank">Download Reference Guide</a>
					</v-card-text>

			</v-card>
		</v-flex>
	</div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rules extends Vue {
	public name = "Home";
}
</script>

