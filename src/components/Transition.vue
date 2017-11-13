<template>
  <div class="parent">
    <transition :name="transitionName" :duration="1000">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
    return {
      transitionName: 'slide-left'
    }
  }
  ,
  // dynamically set transition based on route change
  watch: {
    '$route'(to, from)
    {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
  }
</script>
<style scoped>
  .child-view {
    position: absolute;
    width:100%;
    height: 100%;
    overflow: scroll;
    transition: all .8s cubic-bezier(.55,0,.1,1);
    background-color: #f0eff5;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
