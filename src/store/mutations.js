import * as TYPES from './mutation-types'

export default {
	// 记录当前经度纬度
	[TYPES.GET_BANNER](state,data) {
	  state.banner=data.response
	},
  [TYPES.GET_USER](state,data) {
    state.user=data.response
  }
}
