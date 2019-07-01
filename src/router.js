import Vue from 'vue'
import Router from 'vue-router'

import ModuleA from './views/moduleA'
import ModuleARouter from './views/moduleA/router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/modulea'
  }, {
    path: '/modulea',
    component: ModuleA,
    children: ModuleARouter
  }]
})
