import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/Home'
const Product = r => require.ensure([], () => r(require('@/view/product/Product')))
const Mine = r => require.ensure([], () => r(require('@/view/mine/Mine')))
const Find = r => require.ensure([], () => r(require('@/view/find/Find')))
const Login = r => require.ensure([], () => r(require('@/view/mine/Login')))
const Transition = r => require.ensure([], () => r(require('@/components/Transition')))
const BottomTabs = r => require.ensure([], () => r(require('@/components/BottomTabs')))
import routers from './needAuthRouter'
var VueAwesomeSwiper = require('vue-awesome-swiper')
require('swiper/dist/css/swiper.css')

Vue.use(Router);
Vue.use(VueAwesomeSwiper);
Vue.directive('demo', function (el, binding) {
  el.style.color = binding.value.color
})
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Transition,
      children: [
        {
          path: '/home',
          component: BottomTabs,
          children: [
            {
              path: '/home',
              redirect: '/home/home'
            },
            {
              path: '/home/home',
              component: Home
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
        },
        {
          name:'login',
          path: '/login',
          component: Login,
        }
      ]
    },
    {
      path: '',
      redirect: '/home/home'
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/home');
  } else {
    let toUrl = to.path;
    console.log(toUrl)
    if(routers.includes(toUrl)){
      const key = sessionStorage.getItem("bao-auth");
      if (!key) {
        if (toUrl != '/login') {
          router.push({name: 'login', params: {backUrl: toUrl}})
          return;
        }
      }
    }

    next();
  }
});
export default router
