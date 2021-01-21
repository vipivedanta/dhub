import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/auth/Login.vue'
import LocaleSwitch from '../components/locale/LocaleSwitch.vue'
import Register from '../components/auth/Register.vue'
import VerifyOtp from '../components/auth/VerifyOtp.vue';

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
  { path: '', name : 'Home', component: Register },
  { path: '/signin', name : 'Login', component : Login },
  { path: '/signup', name: 'Register', component: Register },
  { path: '/locale-change', name: 'LocaleSwitch', component: LocaleSwitch },
  { path: '/verify-otp', name: 'VerifyOtp', component: VerifyOtp }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router