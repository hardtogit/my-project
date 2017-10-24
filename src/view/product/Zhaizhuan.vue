<template>
  <div class="hello">
  债转
  </div>
</template>

<script type="es6">
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appss'
    }
  },
created: function(){
  this.getData(this)              //定义方法
  console.log('s')
},

  methods:{
    getData:function (){
      console.log(this)
      this.$http.get('/mobile_api/api/depositSupervise/projectLists?page=1&pageSize=100000000')
        .then(function(response){  //接口返回数据
         console.log(response)
      },function(error){
      })
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
