import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddView.vue')
  },
  {
    path: '/animals',
    name: 'animals',
    component: () => import(/* webpackChunkName: "about" */ '../views/AnimalsView.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalendarView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router