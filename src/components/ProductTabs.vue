<template>
  <div>
  <router-view></router-view>
  <div class="nav">
     <router-link class="item" active-class="active" to="/home/product/dingcunA">定存宝A</router-link>
     <router-link class="item" active-class="active" to="/home/product/dingcunB">定存宝B</router-link>
     <router-link class="item" active-class="active" to="/home/product/directIndex">直投项目</router-link>
     <router-link class="item" active-class="active" to="/home/product/zhaizhuan">债权转让</router-link>
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
    top: 0;
    background-color: #fff;
    color:#000;
    display: flex;
  }
  .item{
    flex: 1;
  }
  .item.active{
    background-color: red;
    color:#00a6e2;
  }
</style>
