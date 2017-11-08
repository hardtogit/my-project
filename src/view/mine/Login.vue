<template>
  <div class="login">
    <div class="tip-bar"><span @click="pop">取消</span></div>
    <div class="logo-container">
      <img class="logo" src="../../assets/images/logo.png" alt="">
    </div>
    <div class="username">
      <BaseInput label="账号" borderType="one" :mapValue="changeUserName" signal="手机号/邮箱/用户名"></BaseInput>
      <BasePasswordInput label="密码" borderType="one" :mapValue="changePassWord" signal="请输入密码"></BasePasswordInput>
    </div>
    <BaseButton :submit="login"></BaseButton>
  </div>
</template>

<script>
  import BaseInput from '../../components/BaseInput.vue'
  import BasePasswordInput from '../../components/BasePasswordInput.vue'
  import BaseButton from '../../components/BaseButton.vue'
  import {mapActions, mapState} from 'vuex'
  import util from '../../assets/lib/utils'

  export default {
    name: 'home',
    components: {
      BaseInput,
      BasePasswordInput,
      BaseButton
    },
    data() {
      return {
        msg: '',
        userName: '',
        password: ''
      }
    },
    created(){
      console.log(this.$route.params.backUrl)
    },
    computed: {
//      ...mapState({'LOGIN':state=>state.infoData.LOGIN})
      ...mapState({GET_DIRCT_LIST: state => state.listData.GET_DIRCT_LIST, lOGIN: state => state.infoData.LOGIN})
    },
    watch: {
      GET_DIRCT_LIST: function (val) {
        console.log(val)
      },
      lOGIN: function (val) {
        console.log(val)
        if (val.code != 100) {
          let message = '';
          if (val.code == 300) message = '登录出错了';
          if (val.code == 301) message = '密码与账户不匹配';
          if (val.code == 302) message = '账户已被冻结，请联系客服';
          if (val.code == 303) message = '账户已被拉黑，请联系客服';
          if (val.code == 304) message = '该账户不存在';
          if (val.code == 305) message = '密码输入错误';
          alert(message)
        }else{
          this.$router.replace({path:this.$route.params.backUrl})
        }
      }
    },
    methods: {
      ...mapActions([
        'getInfoData',
        'getListData'
      ]),
      changeUserName: function (val) {
        this.userName = val
      },
      changePassWord: function (val) {
        this.password = val
      },
      pop:function(){
        this.$router.back()
      },
      login: function () {
        let data = {username: this.userName, password:util.md5(this.password),clientType:'wap',device:'WAP',tokenId:'abc'};
        this.getInfoData({key: 'LOGIN', params: data})
        this.getListData({key: 'GET_DIRCT_LIST'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .login {
    background-color: #fff;
  }

  .tip-bar {
    padding: 15px;
    color: #00a6e2
  }

  .logo-container {
    margin-top: 40px;
    margin-bottom: 70px;
    display: block;
    text-align: center;
    .logo {
      width: 80px;
      height: 75px;
      display: block;
      margin: 0 auto;
    }
  }

  .username {
    padding: 0 0 0 15px;
  }

</style>
