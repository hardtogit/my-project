<template>
  <div class="nav-bar">
    <div class="btn-back " @click="back">
      <span class="arrow-back" ></span>
    </div>

    <div class="title" v-if="title">
      {{title}}
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      },
      backTo: {
        type: String,
        default: '/'
      }
    },
    methods: {
      back () {
      this.$router.back()
  }
  }
  }
</script>
<style scoped lang="less">
  .nav-bar {
    width: 100%;
    height: 44px;s
    background-color: #00a6e2;
    position: relative;
    z-index: 1000;
  }
  .nav-bar .btn-back {
    height: 100%;
    position: absolute;
    top: 0;
    left: 10px;
  }
  .nav-bar .title {
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #fff;
  }
  .nav-bar .arrow-back {
    position: relative;
    left: 10px;
    top:10px
  }
  .arrow-back:after, .arrow-back:before {
    border: 10px solid transparent;
    border-right: 10px solid #00a6e2;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    right: 0;
    content: ' ';
  }
  .arrow-back:before {
    border-right-color: #fff;
    right: 2px;
  }
</style>
