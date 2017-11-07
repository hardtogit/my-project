<template>
  <div class="login">
   <div class="tip-bar"><span>取消</span></div>
    <div class="logo-container">
      <img class="logo" src="../../assets/images/logo.png" alt="">
    </div>
    <div class="username">
    <BaseInput label="账号" borderType="one" :mapValue="change" signal="手机号/邮箱/用户名"></BaseInput>
    <BasePasswordInput label="密码" borderType="one" signal="请输入密码"></BasePasswordInput>
    </div>
    <BaseButton :submit="aa"></BaseButton>
  </div>
</template>

<script>
  import BaseInput from '../../components/BaseInput.vue'
  import BasePasswordInput from '../../components/BasePasswordInput.vue'
  import BaseButton from '../../components/BaseButton.vue'
  export default {
    name: 'home',
    components:{
      BaseInput,
      BasePasswordInput,
      BaseButton
    },
    data () {
      return {
        msg: '',
        userName:'',
        password:''
      }
    },
    methods:{
      aa:function(){console.log('ss')},
      change:(val)=>{
        this.userName=val
        console.log(val)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 .login{
   background-color: #fff;
 }
 .tip-bar{
   padding: 15px;
   color:#00a6e2
 }
 .logo-container {
   margin-top: 40px;
   margin-bottom: 70px;
   display: block;
   text-align: center;
   .logo{
     width: 80px;
     height: 75px;
     display: block;
     margin: 0 auto;
   }
 }
  .username{
    padding: 0 0 0 15px;
  }

</style>
