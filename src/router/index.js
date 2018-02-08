import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import new1 from '@/page/new1'
import new2 from '@/page/new2'
import new3 from '@/page/new3'
import new4 from '@/page/new4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/page/new1',
      name: 'new1',
      component: new1
    }, {
      path: '/page/new2',
      name: 'new2',
      component: new2
    }, {
      path: '/page/new3',
      name: 'new3',
      component: new3
    }, {
      path: '/page/new4',
      name: 'new4',
      component: new4
    }
  ]
})
