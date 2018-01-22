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
      let routersArr=sessionStorage.getItem('routers')&&sessionStorage.getItem('routers').split(',')||[];
      if(routersArr.length==0){
        routersArr.push(from.path)
        routersArr.push(to.path);
      }else{
        console.log(routersArr.indexOf(to.path))
        if(routersArr.indexOf(to.path)!=-1){
          this.transitionName='slide-right'
          routersArr.splice(routersArr.indexOf(to.path)+1,100)
        }else{
          this.transitionName='slide-left'
          routersArr.push(to.path)
        }
      }
      sessionStorage.setItem('routers',routersArr.join(','))
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
    transition: all .4s ;
    background-color: #f0eff5;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }

</style>
