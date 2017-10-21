import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/view/home/Home'
import Product from '@/view/product/Product'
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
              component: Product
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
  if (to.matched.length ===0) {
     next('/home');
  } else {
    next();
  }
});
export default router
