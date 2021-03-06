import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'
import Home3 from '../views/Home3'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/home2',
    name: 'Home2',
    component: Home2
  },

  {
    path: '/home3',
    name: 'Home3',
    component: Home3
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
