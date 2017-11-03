import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/view/home/Home'
import Product from '@/view/product/Product'
import DingcunA from '@/view/product/DingcunA'
import DingcunB from '@/view/product/DingcunB'
import DirectIndex from '@/view/product/DirectIndex'
import Zhaizhuan from '@/view/product/Zhaizhuan'
import Find from '@/view/find/Find'
import Mine from '@/view/mine/Mine'
import Transition from '@/components/Transition'
import BottomTabs from '@/components/BottomTabs'

import VueScroller from 'vue-scroller'
var VueAwesomeSwiper = require('vue-awesome-swiper')
require('swiper/dist/css/swiper.css')
// const Find = r => require.ensure([], () => r(require('@/view/find/Find')))
Vue.use(Router);
Vue.use(VueResource);
Vue.use(VueScroller);
Vue.use(VueAwesomeSwiper)
Vue.directive('demo',function (el,binding) {
  el.style.color=binding.value.color
})
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Transition,
      children:[
        {
          path: '/home',
          component: BottomTabs,
          children:[
            {
              path:'/home',
              redirect:'/home/home'
            },
            {
              path:'/home/home',
              component:Home
            },
            {
              path: '/home/product',
              // component: ProductTabs,
              children:[
                {
                  path:'/home/product',
                  redirect: '/home/product/dingcunA'
                },
                {
                  path:'/home/product/dingcunA',
                  component: DingcunA
                },
                {
                  path:'/home/product/dingcunB',
                  component: DingcunB
                },
                {
                  path:'/home/product/directIndex',
                  component:DirectIndex
                },
                {
                  path:'/home/product/zhaizhuan',
                  component:Zhaizhuan
                }
              ]
            },
            {
              path: '/home/find',
              component: Find
            },
            {
              path: '/home/mine',
              component: Mine
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect:'/home/home'
    },
  ]
})
router.beforeEach((to, from, next) => {
  if(to.matched.length ===0) {
     next('/home');
  }else {
    next();
  }
});
export default router
