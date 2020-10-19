<template>
  <div>
    <v-row>
      <h4>Stats</h4>
    </v-row>
    <v-row>
      <v-col>  
        <h5>Grace</h5><br/>
      <ul>
        <li>Determines how graceful a character is in speech and movement</li>
        <li>Similar to DEX and CHA checks in other RPGs</li>
      </ul>
      </v-col>
    
    <v-col>
      <h5>Intellect</h5><br/>
    <ul>
      <li>Determines what a character knows and how they think</li>
      <li>Similar to INT and Knowledge checks in other RPGs</li>
    </ul>
    </v-col>
    
    <v-col>
      <h5>Might</h5><br/>
    <ul>
      <li>Determines how tough and strong the character is</li>
      <li>Similar to STR and CON checks in other RPGs  </li>
      <li>Determines starting HP</li>
    </ul>
    </v-col>
    
    <v-col>
      <h5>Spirit</h5><br/>
    <ul>
      <li>Determines how well the character is in touch with their surroundings and with the natural world</li>
      <li>Similar to WIS checks in other RPGs</li>
      <li>Determines starting SP</li>
    </ul>
    </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'Weapons'
}
</script>
