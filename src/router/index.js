import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/isstracker',
    name: 'IssTracker',
    component: () => import('../views/ISSTracker.vue')
  },
  {
    path: '/manifest',
    name: 'Manifest',
    component: () => import('../views/Manifest.vue')
  },
  {
    path: '/tikit',
    name: 'TikIt',
    component: () => import('../views/TikIt.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
