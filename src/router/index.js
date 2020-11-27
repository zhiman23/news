import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import login from '../views/login.vue'
import register from '../views/Register.vue'
import user from '../views/Profile/User.vue'
import edit from '../views/Profile/Edit.vue'
import follow from '../views/Profile/Follow.vue'
import collect from '../views/Profile/Collect.vue'
import Test from '../views/Test.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: login },
  { path: '/Register', component: register },
  { path: '/User', component: user, meta: { needAuth: true } },
  { path: '/Edit', component: edit, meta: { needAuth: true } },
  { path: '/Follow', component: follow, meta: { needAuth: true } },
  { path: '/Collect', component: collect, meta: { needAuth: true } },
  { path: '/Test', component: Test },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.needAuth) {
    if (localStorage.getItem('token')) {
      return next()
    } else {
      return router.push('/login').catch(err => { })
    }
  }
  return next()
})

export default router
