import Home from './index.vue'
import PageA from './pageA.vue'
import PageB from './pageB.vue'

export default [{
  path: '/modulea',
  component: Home,
  children: [{
    path: '',
    redirect: {
      name: 'PageA'
    }
  }, {
    path: 'pagea',
    name: 'PageA',
    component: PageA,
    meta: {
      keepAlive: true
    }
  }, {
    path: 'pageb',
    name: 'PageB',
    component: PageB
  }]
}]
