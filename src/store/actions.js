import Fetch from '../request/fetch'
import * as TYPES from './mutation-types'
import Router from 'vue-router'
let router=new Router();
export const getBanners = ({ commit }) => {
  Fetch.banners().then(function (response) {
    commit(TYPES.GET_BANNER,response)
  })
},
  getUser=(context)=>{
    Fetch.getUser().then(function (response) {
      if(response.response.code=='0000'){
        console.log(context)
        context.state.router.push('/login')
      }
      context.commit(TYPES.GET_USER,response)
    })
  }
