import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '@/views/IndexPage'
import LoginPage from '@/views/LoginPage'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
