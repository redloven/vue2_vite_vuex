import Vue from 'vue'
import Vuelidate from 'vuelidate'

import VueRouter from 'vue-router'
import CalcView from '../views/CalcView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(Vuelidate)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'calc',
    component: CalcView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})


export default router
