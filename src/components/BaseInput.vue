<template>
   <div :class="[{'active':ifFocus},borderType]"  class="input-container">
        <div class="label">
         {{label}}
        </div>
        <div class="center">
          <input class="input" v-model="value" type="text"  @focus="focus" @blur="blur" :placeholder="signal">
        </div>
        <img v-if="value" class="delete" @click="clearInput" src="./images/delete_icon.png" alt="">
   </div>
</template>
<script>
  export default {
    props: {
      label: {
        type: String
      },
      backTo: {
        type: String,
        default: '/'
      },
      signal:{
        type:String,
        default:''
      },
      borderType:{
        type:String,
        default:''
      },
      mapValue:{
        type:Function,
      }
    },
    data:function () {
      return{
        ifFocus:false,
        value:''
      }
    },
    created(){
      this.mapValue('sss')
    },
    watch:{
      value:function (val) {
        this.mapValue(val)
      }
    },
    methods: {
      focus () {
        this.ifFocus=true
      },
      blur(){
        this.ifFocus=false
      },
      clearInput(){
        this.value=''
      }
    }
  }
</script>
<style scoped lang="less">
  .input-container{
    display: flex;
    position: relative;
    align-items: center;
    .label{
      flex: 75px 0;
    }
    .center{
      flex: 1;
    }
    .delete{
      width: 19px;
      height:19px;
      position: absolute;
      right: 6px;
      top:14px
    }
    .input{
      width: 100%;
      height: 44px;
      border:none;
      font-size: 16px;
      &:focus{
        outline: none;
      }
    }
  }
  .one{
    border-bottom: 1px solid #ddd;
  }
  .active{
    border-color: #00a6e2;
  }
</style>
