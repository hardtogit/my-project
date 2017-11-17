/**
 * Created by xiangguo .
 * time:2017/10/24 0024.
 * email:413401168@qq.com.
 * use:auto...
 */

import * as types from '../mutation-types'
import Fetch from "../../request/fetch"

// initial state
// shape: [{ id, quantity }]
const state = {
  GET_DIRCT_LIST:''
}

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {

  getListData({commit},data){
    Fetch.getDirectList().then(function (response) {
      commit(types.GET_DIRCT_LIST,{key:data.key,data:response})
    })

  },
}

// mutations
const mutations = {
  [types.GET_DIRCT_LIST] (state,params) {
    // clear cart
    // state.direct =response
    console.log(params)
    state[params.key]=params.data
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
