import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import listData from './modules/listData'
import infoData from './modules/infoData'
import  mutations from './mutations'

Vue.use(Vuex)

const state={
  banner:12,
  user:{}
}
export default new Vuex.Store({
  state,
  actions,
  modules:{
    a:cart,
    b:products,
    listData:listData,
    infoData:infoData
  },
  getters,
  mutations,
})
