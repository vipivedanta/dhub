import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/auth/Login.vue'
import LocaleSwitch from '../components/locale/LocaleSwitch.vue'
import Register from '../components/auth/Register.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home }, 
  {
    path: '/about', 
    name: 'About', 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  { path: '/login', name : 'Login', component : Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/locale-change', name: 'LocaleSwitch', component: LocaleSwitch }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router