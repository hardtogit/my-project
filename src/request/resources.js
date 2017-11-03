/**
 * Created by xiangguo .
 * time:2017/10/21 0021.
 * email:413401168@qq.com.
 * use:auto...
 */
const requests = (Fetch) => {
  // 获取
  Fetch.banners = () => { return Fetch('common/banner?cateId=1', 'GET') }

}

export default requests
