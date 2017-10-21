<template>
  <div class="hello">
    <swiper  :options="swiperOption" class="swiper-box">

      <swiper-slide  class="swiper-item" v-for="banner in banner.data">
        <img class="banner" :src="banner.img" alt="">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-demo="{color: {color}}" >sssss</div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters,mapActions} from 'vuex'
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
//        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
//        spaceBetween: 30,
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
      'banner'
    ]),
    ...mapGetters(["outNum"]),
  },
  methods:{
    ...mapActions([
      'getBanners'
    ]),
     initData(){
//      console.log(this.TYPES.TEST)
//      this.$store.commit(TYPES.TEST)
      this.getBanners()
       console.log(this.banner)
      console.log(this.$store.state)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-item .banner{
    width: 100%;
  }
</style>
<style>
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity:1;
  }
  .swiper-pagination-bullet-active{
    background-color:#de3031 !important;
  }
</style>
