import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Items from '../views/Items.vue'

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
    path: '/Rules',
    name: 'Rules',
    redirect: '/rules/Moves',
    component: () => import(/* webpackChunkName: "about" */ '../views/Rules.vue'),
    children: [
      {
        path: 'Armor',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Armor.vue'),
        name:'Armor'
      },
      {
        path: 'Classes',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Classes.vue'),
        name:'Classes'
      },
      {
        path: 'Death',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Death.vue'),
        name:'Death'
      },
      {
        path: 'Elements',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Elements.vue'),
        name:'Elements'
      },
      {
        path: 'LevelingUp',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/LevelingUp.vue'),
        name:'LevelingUp'
      },
      {
        path: 'Money',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Money.vue'),
        name:'Money'
      },
      {
        path: 'Moves',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Moves.vue'),
        name:'Moves'
      },
      {
        path: 'Stats',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Stats.vue'),
        name:'Stats'
      },
      {
        path: 'Status-Effects',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Status-Effects.vue'),
        name:'Status-Effects'
      },
      {
        path: 'Weapons',
        component: () => import(/* webpackChunkName: "about" */ '../views/rules/Weapons.vue'),
        name:'Weapons'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
