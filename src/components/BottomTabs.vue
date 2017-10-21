<template>
  <div>
  <router-view></router-view>
  <div class="nav">
     <router-link class="item" active-class="active" to="/home/home">
       <div class="icon icon-one"></div>
       <div class="label">首页</div>
     </router-link>
     <router-link class="item" active-class="active" to="/home/product">
       <div class="icon icon-two"></div>
       <div class="label">产品</div>
     </router-link>
     <router-link class="item" active-class="active" to="/home/find">
       <div class="icon icon-three"></div>
       <div class="label">发现</div>
     </router-link>
     <router-link class="item" active-class="active" to="/home/mine">
       <div class="icon icon-four"></div>
       <div class="label">我的</div>
     </router-link>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .nav{
    width: 100%;
    position: fixed;
    height:44px;
    bottom: 0;
    background-color: #fff;
    display: flex;
  }
  .item{
    flex: 1;
    text-align: center;
    .icon{
      width: 20px;
      height: 20px;
      margin: 5px auto 0 auto;
      display: block;
    }
    .icon-one{
      background: url("../assets/images/tab1.png") no-repeat;
      background-size: 100%;
    }
    .icon-two{
      background: url("../assets/images/tab2.png") no-repeat;
      background-size: 100%;
    }
    .icon-three{
      background: url("../assets/images/tab3.png")  no-repeat;
      background-size: 100%;

    }
    .icon-four{
      background: url("../assets/images/tab4.png")  no-repeat;
      background-size: 100%;
    }
    .label{
      font-size: 12px;

    }
    &.active{
      color:#00a6e2;
      .icon-one{
        background: url("../assets/images/tab1h.png") no-repeat;
        background-size: 100%;
      }
      .icon-two{
        background: url("../assets/images/tab2h.png") no-repeat;
        background-size: 100%;
      }
      .icon-three{
        background: url("../assets/images/tab3h.png")  no-repeat;
        background-size: 100%;

      }
      .icon-four{
        background: url("../assets/images/tab4h.png")  no-repeat;
        background-size: 100%;
      }



    }
  }
</style>
