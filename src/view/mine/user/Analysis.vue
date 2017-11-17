<template>
  <div class="analysis">
    <NavBar title="资产分析"></NavBar>
    <VueEcharts :options=""> </VueEcharts>
  </div>
</template>

<script>
  import NavBar from '../../../components/NavBar.vue'
  import VueEcharts from '../../../components/VueEcharts.vue'
  export default {
    name: 'analysis',
    data() {
      return {
        msg: ''
      }
    },
    components:{
      NavBar,
      VueEcharts
    },
    created() {
//      this.getUser();
    },
    computed: {
//      ...mapState({'user': state => (state.user.data)}),
    },
    methods: {
//      ...mapActions([
//        'getUser'
//      ]),
      push(url){
        this.$route.push({path:'user/ana'})
      },
      pop(){
        this.$route.back()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
