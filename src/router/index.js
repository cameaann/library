import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts'
import Events from '../views/Events'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      enterClass:"animate__animated animate__fadeInUp",
      leaveClass:"animate__animated animate__fadeOutDown"
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta:{
      enterClass:"animate__animated animate__fadeInUp",
      leaveClass:"animate__animated animate__fadeOutDown"
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta:{
      enterClass:"animate__animated animate__fadeInUp",
      leaveClass:"animate__animated animate__fadeOutDown"
    }
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      enterClass:"animate__animated animate__fadeInUp",
      leaveClass:"animate__animated animate__fadeOutDown"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
