
<template>
<div :class="[{'active':ifFocus},borderType]"  class="input-container">
  <div class="label">
  {{label}}
</div>
<div class="center">
  <input class="input"  :type="inputType"  @input="changeVal"  @focus="focus" @blur="blur" :placeholder="signal">
  </div>
  <img class="delete"  v-show="imgFlag" @click="changeType" :src="imgFlag" alt="">
  </div>
  </template>
  <script>
    var eyeHide=require('./images/eye_hide_icon.png')
    var eyeIcon=require('./images/eye_icon.png')
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
      type:Function
    }
  },
  data:function () {
    return{
      ifFocus:false,
      value:'',
      imgFlag:eyeHide,
      inputType:'password'
    }
  },
  created(){
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
    },
    changeVal(e){
      this.value=e.target.value
    },
    changeType(){
      if(this.inputType=='password'){
        this.inputType='text';
        this.imgFlag=eyeIcon
      }else{
        this.inputType='password'
        this.imgFlag=eyeHide
      }
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
