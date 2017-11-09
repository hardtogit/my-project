/**
 * Created by xiangguo .
 * time:2017/11/3 0003.
 * email:413401168@qq.com.
 * use:auto...
 */
import mutationActionTypes from '../mutation-info-types-map'
import router from 'vue-router'
// initial state
// shape: [{ id, quantity }]
const state = {
  'LOGIN':'',
  'USER':''
}

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
     getInfoData({commit},data){
       mutationActionTypes[data.key].apiFn(data.params).then(function (response) {
         if(data.key=='LOGIN'&&response.response.code==100){
           sessionStorage.setItem('bao-auth',true)
         }
         commit("COMMIT",{key:data.key,data:response.response})
       })

     }
}

// mutations
const mutations = {
  ['COMMIT'] (state,params) {
    state[params.key]=params.data
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
