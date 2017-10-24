<template>
  <div class="hello" id="da">
  定存A
  </div>
</template>

<script type="es6">
export default {
  name: 'hello',
  data(){
    return {
      msg: 'Welcome to Your Vue.js Appss'
    }
  },
created: function(){
  this.getData(this)              //定义方法
},

  methods:{
    getData:function (){
      this.$http.get('/mobile_api/api/depositSupervise/projectLists?page=1&pageSize=100000000')
        .then(function(response){  //接口返回数据
          console.log(response.body.data)
          var data = response.body.data;
          for(var i=0;i<=data.length;i++){
            var html = "<div>"+response.body.data[0].add_time+"</div>";
          }
          console.log(html);
      },function(error){
      })
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
    margin-top:50px;
    }
</style>
