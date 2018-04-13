import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetallPage from '@/pages/detall'
import OrderList from '@/pages/orderList'
import llfxPage from '@/pages/detall/llfx'
import sjtjPage from '@/pages/detall/sjtj'
import sjycPage from '@/pages/detall/sjyc'
import ggfbPage from '@/pages/detall/ggfb'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path:'/orderlist',
      name:' OrderList',
      component: OrderList
    },
    {
      path: '/detall',
      name: 'DetallPage',
      redirect: '/detall/sjtj',
      component: DetallPage,
      children:[
        {
          path: 'llfx',
          component: llfxPage
        },
        {
          path: 'sjtj',
          component: sjtjPage
        },
        {
          path: 'sjyc',
          component: sjycPage
        },
        {
          path: 'ggfb',
          component: ggfbPage
        }
      ]
    },
  ]
})
