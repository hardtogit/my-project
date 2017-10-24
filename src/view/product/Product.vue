<template>

  <div class="product">
  <div class="nav">
    <div class="item" :class="[{'active':index==0}]" @click="test(0)">
      <div class="title">
        聚点+
      </div>
    </div>
    <div class="item" :class="[{'active':index==1}]" @click="test(1)">
     <div class="title">
       直投项目
     </div>
    </div>
  </div>
    <div class="container" v-if="index==0">
      <Gather></Gather>
    </div>
    <div class="container" v-if="index==1">
      <Direct></Direct>
    </div>
  </div>
</template>

<script >
  import Gather from './Gather.vue';
  import Direct from './Direct.vue';
  export default {
  name: 'hello',
  components:{
    Gather,
    Direct
  },
  data () {
    return {
      index: 0
    }
  },
  created: function(){
    this.getData(this)              //定义方法
    console.log('s')
  },
  methods:{
    getData:function (){
      console.log(this)
//      this.$http.get('/mobile_api/api/depositSupervise/projectLists?page=1&pageSize=100000000')
//        .then(function(response){  //接口返回数据
//         console.log(response)
//      },function(error){
//      })
    },
    test:function (index) {
      this.index=index;

    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
  .product{
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .nav {
    display: flex;
    background-color: #fff;
  .item {
    flex: 1;
    text-align: center;
    .title{
      position: relative;
      padding: 8px;
      display: inline-block;
    }
  }
  .item.active{
    .title{
      color: #00a6e2;
      font-size: 16px;
      border-bottom: 2px solid #00a6e2;
    }
  }
  }
  .container{
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 44px;
  }
</style>
<style lang="less">
  .container{
  ._v-content{
    padding-bottom: 60px;
    /*height: 100%;*/
  }
  }
</style>
