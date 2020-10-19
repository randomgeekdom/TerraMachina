
<template>
  <div>
    <v-row>
      <h4>Weapons</h4>
    </v-row>
    <v-row>
    <ul>
      <li>Weapons are divided into Melee and Ranged</li>
      <li>Weapon will determine what die is thrown for damage</li>
      <li>Unless otherwise indicated, the weapons have the following damage dice
        <ul>
          <li>Unarmed, Gloves: d4</li>
          <li>Knives and other small 1-handed melee weapons: d6</li>
          <li>Swords and other larger 1-handed melee weapons: d8</li>
          <li>2-Handed melee weapons: d10</li>
          <li>1-Handed Ranged: d6</li>
          <li>2-Handed Ranged: d8</li>
        </ul>
      </li>
    </ul>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'Weapons'
}
</script>
