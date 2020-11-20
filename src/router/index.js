import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import login from '../views/login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: login },
  { path: '/Register', component: Register },
  { path: '/User', component: User },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/User') {
    if (localStorage.getItem('token')) {
      return next()
    } else {
      return router.push('/login').catch((err) => { })
    }
  }
  return next()
})

export default router
