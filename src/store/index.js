import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import  mutations from './mutations'

Vue.use(Vuex)

const state={
  num:12
}
export default new Vuex.Store({
  state,
  actions,
  modules:{
    a:cart,
    b:products
  },
  getters,
  mutations,
})
