import Fetch from '../request/fetch'
import * as TYPES from './mutation-types'
export const getBanners = ({ commit }) => {
  Fetch.banners().then(function (response) {
    commit(TYPES.GET_BANNER,response)
  })

}
