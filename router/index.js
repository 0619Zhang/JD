import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import FenLei from '@/views/FenLei.vue'
import Find from '@/views/Find.vue'
import ShoppingCar from '@/views/ShoppingCar.vue'
import Mine from '@/views/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/fenLei',
    component: FenLei
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/shoppingcar',
    component: ShoppingCar
  },
  {
    path: '/mine',
    component: Mine
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
