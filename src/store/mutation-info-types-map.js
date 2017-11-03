/**
 * Created by xiangguo .
 * time:2017/11/3 0003.
 * email:413401168@qq.com.
 * use:auto...
 */
import * as mutationTypes from './mutation-types'
import Fetch from '../request/fetch'
export default {
  [mutationTypes.LOGIN]: {//获取刮刮卡详情
    apiFn: Fetch.login
  }
}
