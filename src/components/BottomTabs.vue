<template>
  <div>
  <router-view></router-view>
  <div class="nav">
     <router-link class="item" active-class="active" to="/home/home">首页</router-link>
     <router-link class="item" active-class="active" to="/home/product">产品</router-link>
     <router-link class="item" active-class="active" to="/home/find">发现</router-link>
     <router-link class="item" active-class="active" to="/home/mine">我的</router-link>
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
<style scoped>
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
  }
  .item.active{
    background-color: red;
  }
</style>
