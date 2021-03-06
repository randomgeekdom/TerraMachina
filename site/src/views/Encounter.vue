
<template>
	<div>
		<v-flex class="d-flex flex-wrap">
			<v-card width="1100" class="ma-2">
				<v-sheet class="pa-10" rounded="lg">
					<v-row>
						<v-col> <h1>Current Encounter</h1></v-col>
						<v-col>
							<v-btn @click="RemoveDeadEnemies()">Clear the Dead</v-btn>
						</v-col>
						<v-col>
							<v-btn @click="ClearEnemies()">Clear All</v-btn>
						</v-col>
					</v-row>
					<v-card
						class="ma-2 pa-4 text-no-wrap"
						v-for="(enemy, index) in encounterEnemies"
						:key="`enemy-${index}`"
						:color="enemy.HP > 0 ? '#FFFFFF' : 'red lighten-2'"
					>
						<v-row>
							<v-col>
								<v-card-title>{{ enemy.Name }}</v-card-title></v-col
							>
							<v-col>
								<v-btn
									class="mx-5"
									fab
									dark
									small
									color="primary"
									@click="Delete(enemy)"
								>
									<v-icon dark> mdi-minus </v-icon>
								</v-btn></v-col
							>
						</v-row>

						<v-row>
							<v-col>
								<v-card-subtitle>
									{{ enemy.Description }}
								</v-card-subtitle>
								<v-card-subtitle>
									Weaknesses: {{ enemy.Weakness }}
								</v-card-subtitle>
								<v-card-subtitle>
									Immunity: {{ enemy.Immunity }}
								</v-card-subtitle>
							</v-col>
							<v-col>
								<v-row class="px-3">
									<v-card-text>
										Attacks
										<pre class="px-4">{{ enemy.Attacks }}</pre>
									</v-card-text>
								</v-row>
							</v-col>
						</v-row>

						<v-row class="px-3">
							<v-col>
								<v-text-field
									:disabled="enemy.HP <= 0"
									label="HP"
									type="number"
									v-model="enemy.HP"
									@change="UpdateEncounter()"
								></v-text-field>
								<v-flex class="d-flex flex-wrap">
									<v-btn
										@click="Attack(enemy)"
										class="my-2 mr-2"
										:disabled="enemy.HP <= 0"
										>Attack</v-btn
									> 
										
									<v-text-field label="Damage Amount" v-model="DamageAmount" />
								</v-flex>
								<h4>Attack Attribute</h4>
								<v-row>
									<v-col v-for="element in elements" :key="element.name"  >
										<v-btn width="100" :color="GetSelectValue(element.Value)" :disabled="enemy.HP <= 0" @click="SetElementValue(element)">{{element.Key}}</v-btn>
									</v-col>
								</v-row>
								<v-btn :color="GetSelectValue(Piercing)" :disabled="enemy.HP <= 0" @click="Piercing = !Piercing">Piercing</v-btn>
							</v-col>
							<v-col>
								<v-text-field
									label="Armor"
									type="number"
									v-model="enemy.Armor"
									@change="UpdateEncounter()"
									:disabled="enemy.HP <= 0"
								></v-text-field>
								<v-btn @click="ChangeArmor(enemy, 1)" :disabled="enemy.HP <= 0">
									Increase Armor</v-btn
								>
								<v-btn @click="ChangeArmor(enemy, -1)" :disabled="enemy.HP <= 0"
									>Ding Armor</v-btn
								>
							</v-col>
						</v-row>
					</v-card>
				</v-sheet>
			</v-card>
			<v-card width="400" class="ma-2">
				<v-sheet class="pa-10 flex" rounded="lg">
					<v-row>
						<v-col><h1>Loot</h1></v-col>
						<v-col><v-btn @click="ClearLoot()">Clear</v-btn></v-col>
					</v-row>

					<v-card class="ma-2" v-for="(lootItem, index) in Loot" :key="`lootItem-${index}`">
						<v-card-title>Name: {{ lootItem.Name }}</v-card-title>
						<v-card-subtitle>
							Description: <pre>{{ lootItem.Description }}</pre>
						</v-card-subtitle>
						<v-card-text>
							Cost: {{ lootItem.Cost }}
							<v-btn @click="DeleteLoot(lootItem)"
								><v-icon>mdi-delete-forever</v-icon></v-btn
							>
						</v-card-text>
					</v-card>
				</v-sheet>
			</v-card>
		</v-flex>
	</div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Enemy from "@/models/Enemy";
import Item from "@/models/Item";
import KeyValue from "@/models/KeyValue";
import Randomizer from "@/services/Randomizer";
import reference from "../reference.json";

@Component
export default class Encounter extends Vue {
	public RollResult = "";
	public encounterEnemies: Enemy[] = [];

	public Piercing = false;

	public DamageAmount = 1;

	public SetElementValue(element: KeyValue<boolean>){
		element.Value = !element.Value;
	}

	public GetSelectValue(value: boolean){
		return value ? 'success' : 'normal';
	}

	public elements: KeyValue<boolean> [] = [
		{
			Key: "Holy",
			Value: false
		},
		{
			Key: "Dark",
			Value: false
		},
		{
			Key: "Earth",
			Value: false
		},
		{
			Key: "Air",
			Value: false
		},
		{
			Key: "Fire",
			Value: false
		},
		{
			Key: "Ice",
			Value: false
		},
		{
			Key: "Lightning",
			Value: false
		},
		{
			Key: "Water",
			Value: false
		}
	];

	public GetElements(): string[] {
		const text: string[] = [];

		const selectedElements = this.elements.filter(x=>x.Value);
		for(let i = 0; i<selectedElements.length; i++){
			text.push(selectedElements[i].Key);
		}

		return text;
	}

	public Loot: Item[] = [];

	public DeleteLoot(lootItem: Item) {
		const index = this.Loot.indexOf(lootItem);
		this.Loot.splice(index, 1);
		this.UpdateEncounter();
	}

	public ClearLoot() {
		this.Loot = [];
		this.UpdateEncounter();
	}

	public Attack(enemy: Enemy) {
		let damage = this.DamageAmount;
		const elements = this.GetElements();

		for (let i = 0; i < elements.length; i++) {
			if (enemy.Immunity.includes(elements[i])) {
				damage = 0;
				break;
			}
			if (enemy.Weakness.includes(elements[i])) {
				damage += 2;
			}
		}

		if (enemy.Armor > 0 && !this.Piercing) {
			damage -= enemy.Armor;
			damage = Math.max(damage, 0);
		}

		enemy.HP -= damage;
		if (enemy.HP <= 0) {
			//Enemy is killed
			const fullEnemy = reference.Bestiary.find(x => x.Name === enemy.Name);
			const lootValue =
				parseInt(fullEnemy?.HP || "0") + parseInt(fullEnemy?.Armor || "0");

			this.GenerateLoot(lootValue);

			enemy.HP = 0;
		}

		this.UpdateEncounter();
	}

	public GenerateLoot(lootValue: number){
		let item: Item = Randomizer.GetRandomElement<Item>(reference.Items);
		for(let i = 0; i<4; i++){
			const newItem = Randomizer.GetRandomElement(reference.Items);

			if(Math.abs(parseInt(newItem.Cost) - lootValue) < Math.abs(parseInt(item.Cost) - lootValue)){
				item = newItem;
			}
		}

		this.Loot.push(item);
		this.UpdateEncounter();
	}

	public created() {
		const enemyString = localStorage.getItem("encounterEnemies");
		if (enemyString) {
			this.encounterEnemies = JSON.parse(enemyString);
		}
		const lootString = localStorage.getItem("encounterLoot");
		if (lootString) {
			this.Loot = JSON.parse(lootString);
		}
	}

	public UpdateEncounter() {
		localStorage.setItem(
			"encounterEnemies",
			JSON.stringify(this.encounterEnemies)
		);
		localStorage.setItem("encounterLoot", JSON.stringify(this.Loot));
	}

	public ChangeArmor(enemy: Enemy, change: number): void {
		const newArmor = parseInt(enemy.Armor.toString()) + change;
		if (newArmor >= 0) {
			enemy.Armor = newArmor;
			this.UpdateEncounter();
		}
	}

	public Delete(enemy: Enemy): void {
		const i = this.encounterEnemies.indexOf(enemy);
		this.encounterEnemies.splice(i, 1);
		this.UpdateEncounter();
	}

	public Roll(die: number) {
		this.RollResult = (Randomizer.GetRandomInt(die) + 1).toString();
	}

	public RemoveDeadEnemies() {
		const deadEnemies = this.encounterEnemies.filter(x => x.HP <= 0);
		deadEnemies.forEach(d => {
			const index = this.encounterEnemies.indexOf(d);
			this.encounterEnemies.splice(index, 1);
		});

		this.UpdateEncounter();
	}

	public ClearEnemies() {
		this.encounterEnemies = [];

		this.UpdateEncounter();
	}
}
</script>
<style>
pre {
	white-space: pre-wrap; /* Since CSS 2.1 */
	white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
	white-space: -pre-wrap; /* Opera 4-6 */
	white-space: -o-pre-wrap; /* Opera 7 */
	word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>