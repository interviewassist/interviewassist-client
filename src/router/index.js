import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '@/views/IndexPage'
import MainPage from '@/views/MainPage'
import MyproblemsPage from '@/views/MyproblemsPage'

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/myproblems',
      name: 'MyproblemsPage',
      component: MyproblemsPage
    }
  ]
})
