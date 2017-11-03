import Fetch from '../request/fetch'
import * as TYPES from './mutation-types'
export const getBanners = ({ commit }) => {
  Fetch.banners().then(function (response) {
    commit(TYPES.GET_BANNER,response)
  })
},
  getUser=({commit})=>{
    Fetch.getUser().then(function (response) {
      commit(TYPES.GET_USER,response)
    })
  }
