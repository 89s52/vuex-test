import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import getData from '@/components/getData'
import sockData from '@/components/sockData'
import market from '@/components/market'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/getData',
      name: 'getData',
      component: getData
    },
    {
      path: '/sockData',
      name: 'sockData',
      component: sockData
    },
    {
      path: '/market',
      name: 'market',
      component: market
    }
  ]
})
