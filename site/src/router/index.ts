import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Items from '../views/Items.vue'
import GenerateNPC from '../views/GenerateNPC.vue'
import Bestiary from '../views/Bestiary.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Items',
    name: 'Items',
    component: Items
  },
  {
    path: '/Generate-NPC',
    name: 'GenerateNPC',
    component: GenerateNPC
  },
  {
    path: '/Bestiary',
    name: 'Bestiary',
    component: Bestiary
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
