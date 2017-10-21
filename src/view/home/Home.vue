<template>
  <div class="hello">
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item">Slide 1</swiper-slide>
      <swiper-slide class="swiper-item">Slide 2</swiper-slide>
      <swiper-slide class="swiper-item">Slide 3</swiper-slide>
      <swiper-slide class="swiper-item">Slide 4</swiper-slide>
      <swiper-slide class="swiper-item">Slide 5</swiper-slide>
      <swiper-slide class="swiper-item">Slide 6</swiper-slide>
      <swiper-slide class="swiper-item">Slide 7</swiper-slide>
      <swiper-slide class="swiper-item">Slide 8</swiper-slide>
      <swiper-slide class="swiper-item">Slide 9</swiper-slide>
      <swiper-slide class="swiper-item">Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    我是首页{{num}}
    <div v-demo="{color: {color}}" >sssss</div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters} from 'vuex'
  import * as TYPES from '../../store/mutation-types'
//  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  var s =require('swiper/dist/css/swiper.css')
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      color: '#ff0000',
      swiperOption: {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
      }
    }
  },
  created(){
      this.initData();
   },
//  components:{
//    swiper,
//    swiperSlide
//  },
  computed: {
    ...mapState([
      'num'
    ]),
    ...mapGetters(["outNum"])
  },
  methods:{
    ...mapMutations([
      TYPES.TEST
    ]),
     initData(){
//      console.log(this.TYPES.TEST)
//      this.$store.commit(TYPES.TEST)
      this.TEST()
//       alert(this.outNum)
      console.log(this.$store.state)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/swiper.min.css";

</style>
