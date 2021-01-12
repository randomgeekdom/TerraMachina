
<template>
	<div>
		<v-flex class="d-flex flex-wrap">
			<v-card cols="12" rounded="lg" class="ma-2">
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
						<v-card-subtitle>Player Sheets</v-card-subtitle>
					
						<v-card-text><a href="/Basic_Character_Sheet.pdf" target="_blank">Basic Character Sheet</a></v-card-text>
						<v-card-text><a href="/Custom_Moves_Sheet.pdf" target="_blank">Custom Moves Sheet</a></v-card-text>
					
						<v-card-subtitle>Core Class Sheets</v-card-subtitle>
						<v-card-text><a href="/Dragoon.pdf" target="_blank">Dragoon</a></v-card-text>
						<v-card-text><a href="/Engineer.pdf" target="_blank">Engineer</a></v-card-text>
						<v-card-text><a href="/Gunslinger.pdf" target="_blank">Gunslinger</a></v-card-text>
						<v-card-text><a href="/Knight.pdf" target="_blank">Knight</a></v-card-text>
						<v-card-text><a href="/Protector.pdf" target="_blank">Protector</a></v-card-text>
						<v-card-text><a href="/Scoundrel.pdf" target="_blank">Scoundrel</a></v-card-text>
						<v-card-text><a href="/Sorcerex.pdf" target="_blank">Sorcerex</a></v-card-text>
					
					<!-- <v-card-text>
						<v-card-subtitle>Other Class Sheets</v-card-subtitle>
						<a href="/Dragoon.pdf" target="_blank">Dragoon</a>
						<a href="/Engineer.pdf" target="_blank">Engineer</a>
					</v-card-text>-->
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

