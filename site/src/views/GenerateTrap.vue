
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-10" rounded="lg">
          <v-row>
            <v-col>
              <label># of Traps to Generate</label>
              <v-text-field
                type="number"
                v-model="numberOfGenerations"
                placeholder="Amount of Traps to Generate"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-btn @click="GenerateTrap()">Generate</v-btn>
            <v-btn @click="ClearTraps()">Clear</v-btn>
          </v-row>
          <v-row>
            <v-card
              v-for="Trap in Traps"
              :key="Trap.Name"
              width="250"
              class="ma-5"
            >
              <v-card-subtitle>{{Trap}}</v-card-subtitle>
              <!-- <v-card-subtitle>Hometown: {{ Gender(Trap.Gender) }}</v-card-subtitle> -->
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
                @click="Delete(Trap)"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
            </v-card>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import TrapGenerator from "@/services/TrapGenerator";

@Component
export default class GenerateTrap extends Vue {
  public Traps: string[] = [];
  public numberOfGenerations = 1;

  public created() {
    const storedTraps = localStorage.getItem("Traps");
    if (storedTraps) {
      this.Traps = JSON.parse(storedTraps);
    }
  }

  public setTraps() {
    localStorage.setItem("Traps", JSON.stringify(this.Traps));
  }

  public GenerateTrap(): void {
    for (let i = 0; i < this.numberOfGenerations; i++) {
      this.Traps.push(TrapGenerator.Generate());
    }
    this.setTraps();
  }

  public Delete(Trap: string): void {
    const index = this.Traps.indexOf(Trap, 0);
    if (index > -1) {
      this.Traps.splice(index, 1);
    }
    this.setTraps();
  }

  public ClearTraps(): void {
    this.Traps = [];
    this.setTraps();
  }
}
</script>

