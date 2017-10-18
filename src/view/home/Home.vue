<template>
  <div class="hello">
    我是首页{{num}}
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import * as TYPES from '../../store/mutation-types'

export default {
  name: 'home',
  data () {
    return {
      msg: '',
    }
  },

  created(){
      this.initData();
   },

  computed: {
    ...mapState([
      'num'
    ]),
  },
  methods:{
    ...mapMutations([
      TYPES.TEST
    ]),
     initData(){
//      console.log(this.TYPES.TEST)
//      this.$store.commit(TYPES.TEST)
      this.TEST()
      console.log(this.$store.state)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
