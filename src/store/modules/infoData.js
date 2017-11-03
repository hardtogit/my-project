/**
 * Created by xiangguo .
 * time:2017/11/3 0003.
 * email:413401168@qq.com.
 * use:auto...
 */
import mutationActionTypes from '../mutation-info-types-map'
// initial state
// shape: [{ id, quantity }]
const state = {
}

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
     getInfoData({commit},data){
       console.log(data)
       mutationActionTypes[data.key].apiFn(data.params).then(function (response) {
         commit("COMMIT",{key:data.key,data:response})
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
