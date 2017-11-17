import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import * as actions from './actions'
import * as getters from './getters'
import listData from './modules/listData'
import infoData from './modules/infoData'
import  mutations from './mutations'

Vue.use(Vuex)

const state={
  banner:12,
  user:{},
  router:router
}
export default new Vuex.Store({
  state,
  actions,
  modules:{
    listData:listData,
    infoData:infoData
  },
  getters,
  mutations,
})
