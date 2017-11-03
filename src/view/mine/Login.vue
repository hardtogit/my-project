<template>
  <div class="login">
   <div class="tip-bar"><span>取消</span></div>
    <div class="logo-container">
      <img class="logo" src="../../assets/images/logo.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: ''
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

</style>
