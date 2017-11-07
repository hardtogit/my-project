<template>
  <div class="btn" @click="submit">
    {{label}}
  </div>
</template>
<script>
  export default {
    props: {
      label:{
        type:String,
        default:'登录'
      },
      submit:{
        type:Function,

      }
    },
    data:function () {
          return{

          }
    },
    created(){

    },
    watch:{

    },
    methods: {

    }
  }
</script>
<style scoped lang="less">
  .btn{
    margin: 20px 15px;
    height: 40px;
    line-height: 40px;
    -webkit-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #00a7e1;
    border: 1px solid #008bbc;
    border-radius: 5px;
    text-align: center;
    color:#fff
  }
</style>
