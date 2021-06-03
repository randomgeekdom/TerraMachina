
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
						<v-btn to="/Terra-Machina.pdf" target="_blank">Download Rulebook</v-btn>
					</v-card-text>
					<v-card-subtitle>Player Sheets</v-card-subtitle>
				
					<v-flex class="d-flex flex-wrap">
						<v-card flat><v-card-text><v-btn to="/Basic_Character_Sheet.pdf" target="_blank">Basic Character Sheet</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Custom_Moves_Sheet.pdf" target="_blank">Custom Moves Sheet</v-btn></v-card-text></v-card>
					</v-flex>

					<v-card-subtitle>Class Sheets</v-card-subtitle>
					<v-flex class="d-flex flex-wrap">
						<v-card flat><v-card-text><v-btn to="/Brute.pdf" target="_blank">Brute</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Dragoon.pdf" target="_blank">Dragoon</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Engineer.pdf" target="_blank">Engineer</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Gunslinger.pdf" target="_blank">Gunslinger</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Knight.pdf" target="_blank">Knight</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Protector.pdf" target="_blank">Protector</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Scoundrel.pdf" target="_blank">Scoundrel</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Sorcerex.pdf" target="_blank">Sorcerex</v-btn></v-card-text></v-card>
						<v-card flat><v-card-text><v-btn to="/Warrior.pdf" target="_blank">Warrior</v-btn></v-card-text></v-card>
					</v-flex>
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

