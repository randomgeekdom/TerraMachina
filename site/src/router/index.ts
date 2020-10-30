import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Items from '../views/Items.vue'
import GenerateNPC from '../views/GenerateNPC.vue'
import Bestiary from '../views/Bestiary.vue'
import SampleCustomMoves from '../views/SampleCustomMoves.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
  {
    path: '/generate-npc',
    name: 'GenerateNPC',
    component: GenerateNPC
  },
  {
    path: '/bestiary',
    name: 'Bestiary',
    component: Bestiary
  },
  {
    path: '/sample-custom-moves',
    name: 'SampleCustomMoves',
    component: SampleCustomMoves
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
