import Vue from 'vue'
import Router from 'vue-router'

import Hello from 'VIEW/hello/hello'
import Active from 'VIEW/active/active'
import voteline from 'VIEW/voteline/voteline'
import zhuanpan from 'VIEW/zhuanpan/zhuanpan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Active',
      component: Active
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/voteline',
      name: 'voteline',
      component: voteline
    },
    {
      path: '/zhuanpan',
      name: 'zhuanpan',
      component: zhuanpan
    }
  ]
})
