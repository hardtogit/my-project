/**
 * Created by xiangguo .
 * time:2017/10/24 0024.
 * email:413401168@qq.com.
 * use:auto...
 */
const requests = (Fetch) => {
  // 获取
  Fetch.getDirectList = () => { return Fetch('directInvest/projects?page=1', 'GET') }

}

export default requests
