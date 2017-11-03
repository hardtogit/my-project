<template>
  <div class="hello">
    <swiper  :options="swiperOption" class="swiper-box">

      <swiper-slide  class="swiper-item" v-for="banner in banner.data">
        <img class="banner" :src="banner.img" alt="">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="labels">
      <div class="label"><img src="../../assets/images/gz.png" alt=""><a href="">国资控股</a></div>
      <div class="label"><img src="../../assets/images/hj.png" alt=""><a href="">互金会员</a></div>
      <div class="label"><img src="../../assets/images/yq.png" alt=""><a href="">邀请有礼</a></div>
    </div>
    <img class="new-img" src="../../assets/images/newHand.png" alt="">
    <div v-demo="{color: {color}}" >sssss</div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters,mapActions} from 'vuex'
  import * as TYPES from '../../store/mutation-types'
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
      'getBanners',
      'getUser',
      'getInfoData'
    ]),
     initData(){
//      console.log(this.TYPES.TEST)
//      this.$store.commit(TYPES.TEST)
      this.getBanners();
      this.getUser();
       this.getInfoData({key:'LOGIN'})
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .swiper-item .banner{
    width: 100%;
    display: block;
  }
  .labels{
    display: flex;
    background-color: #fff;
    vertical-align: middle;
  }
  .label{
    flex: 1;
    text-align: center;
    padding: 7px 0 8px 0;
    vertical-align: middle;
    img{
      display: inline-block;
      width: 15px;
      margin-right: 2px;
      vertical-align: middle;
    }
    a{
      text-decoration: none;
      font-size: 14px;
    }
  }
  .new-img{
    width: 100%;
    margin: 15px 0;
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
