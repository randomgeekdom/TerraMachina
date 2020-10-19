
<template>
  <div>
<h1><span style="font-weight: 400;">Basic Character Sheet</span></h1>
<p><b>Character Name</b><span style="font-weight: 400;"> _______________________________________</span></p>
<p><b>Race</b> Human &nbsp; | &nbsp; Other<b> : ___________________________________________________</b></p>
<p><b>Stats</b> <span style="font-weight: 400;">(Distribute the following: +2, +1, 0, -1)</span><span style="font-weight: 400;"><br /></span></p>
<p><span style="font-weight: 400;">Grace ____&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-weight: 400;">Intellect&nbsp; ____&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-weight: 400;">Might&nbsp; ____&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-weight: 400;">Spirit &nbsp; ____</span><span style="font-weight: 400;"></span></p>
<p><b>HP</b><span style="font-weight: 400;"> ____ of ____ (</span><span style="font-weight: 400;">To start: Might+10</span><span style="font-weight: 400;">)</span> <b>SP </b><span style="font-weight: 400;">____ of ____ (</span><span style="font-weight: 400;">To start: Spirit+10</span><span style="font-weight: 400;">)</span></p>
<p><b>Basic Moves</b></p>
<ul>
<li style="font-weight: 400;"><b>Melee</b><span style="font-weight: 400;">: Roll+Might.&nbsp; On success, weapon determines damage (unarmed=d4)</span></li>
<ul>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Success </span></i><span style="font-weight: 400;">&rArr; Success and choose 1 of the following</span></li>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Add 1d6 damage</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">No retaliation</span></li>
</ul>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Minor Success </span></i><span style="font-weight: 400;">&rArr; Success, but the enemy retaliates</span></li>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Fail </span></i><span style="font-weight: 400;">&rArr; Attack Fails + Retaliation</span></li>
</ul>
<li style="font-weight: 400;"><b>Guard</b><span style="font-weight: 400;">: Roll+Might to protect yourself or another</span></li>
<ul>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Success </span></i><span style="font-weight: 400;">&rArr; Next incoming attack is blocked completely</span></li>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Minor Success </span></i><span style="font-weight: 400;">=&gt; Next incoming attack damage is halved (enemy does not act)</span></li>
</ul>
<li style="font-weight: 400;"><b>Convince</b><span style="font-weight: 400;">: Roll+Grace to persuade someone to do something</span></li>
<ul>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Success </span></i><span style="font-weight: 400;">&rArr; Success</span></li>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Minor Success </span></i><span style="font-weight: 400;">&rArr; Unsuccessful, but can continue persuading</span></li>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Fail </span></i><span style="font-weight: 400;">&rArr; Unsuccessful and cannot try again in the current area</span></li>
</ul>
<li style="font-weight: 400;"><b>Shoot</b><span style="font-weight: 400;">: Roll+Grace to shoot an enemy with a projectile.&nbsp; (Same as Melee).</span></li>
<li style="font-weight: 400;"><b>Solve</b><span style="font-weight: 400;">: Roll+Intellect to figure out how to solve a problem.</span></li>
<ul>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Success </span></i><span style="font-weight: 400;">&rArr; Success</span></li>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Minor Success </span></i><span style="font-weight: 400;">&rArr; Partial success or success at a cost.</span></li>
</ul>
<li style="font-weight: 400;"><b>Remember</b><span style="font-weight: 400;">: Roll+Intellect to recall something you may have learned</span></li>
<ul>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Success </span></i><span style="font-weight: 400;">&rArr; You remember it correctly.</span></li>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Minor Success </span></i><span style="font-weight: 400;">&rArr; You remember part of it</span></li>
</ul>
<li style="font-weight: 400;"><b>Sense</b><span style="font-weight: 400;">: Roll+Spirit to gauge your surroundings for anything that&rsquo;s off</span></li>
<ul>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Success </span></i><span style="font-weight: 400;">&rArr; You are aware of all immediate danger</span></li>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Minor Success </span></i><span style="font-weight: 400;">&rArr; You are aware of some danger</span></li>
</ul>
<li style="font-weight: 400;"><b>Seek</b><span style="font-weight: 400;">: Roll+Spirit to find anything interesting in the room</span></li>
<ul>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Success </span></i><span style="font-weight: 400;">&rArr; Find all important and hidden items</span></li>
<li style="font-weight: 400;"><i><span style="font-weight: 400;">Minor Success </span></i><span style="font-weight: 400;">&rArr; Find some important items</span></li>
</ul>
</ul>
<p></p>
<p><b>Items (start with 1 Potion and 9 bux):</b></p>
<table style="width: 553px;">
<tbody>
<tr>
<td style="width: 553px;">
<p><span style="font-weight: 400;"><br /><br /></span></p>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
</tr>
</tbody>
</table>
<p></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class BasicCharacterSheet extends Vue {
  public name = "Basic Character Sheet";
}
</script>
<style>
@media print
{    
    .no-print, .no-print *
    {
        display: none !important;
    }
}
</style>