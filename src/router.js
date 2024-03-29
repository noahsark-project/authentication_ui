import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Registry from './views/Registry.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registry',
      name: 'registry',
      component: Registry
    },
  ]
})
