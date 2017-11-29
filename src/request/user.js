
/**
 * Created by xiangguo .
 * time:2017/11/3 0003.
 * email:413401168@qq.com.
 * use:auto...
 */
const user=(Fetch)=>{
  // 获取用户信息
  Fetch.getUser = () => { return Fetch('user/info', 'GET') };
  //用户登录
  Fetch.login =(data)=>{console.log(data) ; return Fetch('passport/login','POST',data) }
  //资产分析
  Fetch.analysis=(data)=>{return Fetch('api/assets','GET',data)}
}
export default user
