<template>
  <div class="gather">
     <ul>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>我是聚点+列表</li>
       <li>aaaaaaaaaa列表</li>
       <li>aaaaaaaaaa列表</li>
       <li>aaaaaaaaaa列表</li>
       <li>aaaaaaaaaa列表</li>
       <li>aaaaaaaaaa列表</li>
     </ul>
  </div>
</template>

<script >
  export default {
    name: 'hello',
    data () {
      return {
        index: 0
      }
    },
    created: function(){
      this.getData(this)              //定义方法
    },
    methods:{
      getData:function (){
        console.log(this)
//        this.$http.get('/mobile_api/api/depositSupervise/projectLists?page=1&pageSize=100000000')
//          .then(function(response){  //接口返回数据
//            console.log(response)
//          },function(error){
//          })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
  .nav {

  }
</style>
