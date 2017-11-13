<template>
  <div class="pageLoading" :style="'top:'+top+'px;bottom:'+bottom+'px'">
    <div class="container">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String
      },
      text: {
        type: String,
        default: '加载中...'
      },
      top:{
        type:Number,
        default:50
      },
      bottom:{
        type:Number,
        default:44
  }
    },

  }
</script>
<style scoped lang="less">
  .pageLoading{
    position: absolute;
    width: 100%;
    top:50px;
    bottom: 44px;
    background-color: #fff;
  }
  .container {
    z-index: 1050;
    position: fixed;
    transform: translate3d(-50%, -50%, 0px);
    top: 50%;
    left: 50%;
    .text{
      text-align: center;
      font-size: 14px;
      color:#999;
      margin-top: 6px;
    }
  }

  .spinner > div {
    width: 24px;
    height: 24px;
    background-color: #00a6e2;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }
</style>
