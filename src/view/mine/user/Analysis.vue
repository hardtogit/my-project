<template>
  <div class="analysis">
    <NavBar title="资产分析"></NavBar>
    <div v-if="data">
    <div  class="head">
     <div class="item">
       <div class="title">历史累计收益</div>
       <div class="num">{{data.history}}</div>
     </div>
      <div class="item">
        <div class="title">资产总值</div>
        <div class="num">{{data.sum}}</div>
      </div>
    </div>
    <div  class="pie-container">
      <div class="pie-title">
        资产分析
      </div>
    <VueEcharts   :width='width' :options="option"> </VueEcharts>
      <ul class='money-detail'>
        <li><span class='circle ye'></span><span class='m_m'>账户余额</span><span class='m_i'>{{data.money}}</span></li>
        <li><span class='circle jd'></span><span class='m_m'>聚点+计划待收本息</span><span class='m_i'>{{data.depositSuperviseLeftRevenue}}</span></li>
        <li><span class='circle dca'></span><span class='m_m'>定存宝A计划待收本息</span><span class='m_i'>{{data.dingcun}}</span></li>
        <li><span class='circle dcb'></span><span class='m_m'>定存宝B计划待收本息</span><span class='m_i'>{{data.borrow}}</span></li>
        <li><span class='circle zt'></span><span class='m_m'>直投项目待收本息</span><span class='m_i'>{{data.transfer}}</span></li>
        <li><span class='circle zq'></span><span class='m_m'>债权转让待收本息</span><span class='m_i'>{{data.dingcunB}}</span></li>
      </ul>
    </div>
    </div>
    <div class="loading" v-else>
      <PageLoading top="46" bottom="0"></PageLoading>

    </div>
  </div>
</template>

<script>
  import {mapActions,mapState} from 'vuex'
  import NavBar from '../../../components/NavBar.vue'
  import PageLoading from '../../../components/PageLoading.vue'
  import VueEcharts from '../../../components/VueEcharts.vue'
  export default {
    name: 'analysis',
    data() {
      return {
        msg: '',
        width:document.body.clientWidth
      }
    },
    components:{
      NavBar,
      VueEcharts,
      PageLoading
    },
    created() {
      this.getInfoData({key:'ANALYSIS'});
    },
    computed: {
      ...mapState({'data': state => (state.infoData.ANALYSIS.data)}),
      option:function () {
        let option={
          title: {
            text: '资产总值',
            subtext: this.data.sum,
            x: 'center',
            y: '70px',
            itemGap: 14,
            textStyle : {
              color : '#888',
              fontFamily : '微软雅黑',
              fontSize : 12,
              fontWeight : 'normal'
            },
            subtextStyle:{
              fontSize:16,
              color : '#222'
            }
          },
          tooltip: {
            show: true
          },
          color: [
            "#4cafff",
            "#763cff",
            "#fa394c",
            "#ffaf32",
            "#2ce4a6",
            "#ff660a"
          ],
          series: [{
            name: '资产分析',
            type: 'pie',
            label: {
              normal: {
                show: false
              }
            },
            radius: ["55%", "100%"],
            hoverAnimation: false,
            data: [
              {value:this.data.money, name:'账户余额'},
              {value:this.data.depositSuperviseLeftRevenue, name:'聚点+计划待收本息'},
              {value:this.data.dingcun, name:'定存宝A计划待收本息'},
              {value:this.data.borrow, name:'定存宝B计划待收本息'},
              {value:this.data.transfer, name:'直投项目待收本息'},
              {value:this.data.dingcunB, name:'债权转让待收本息'}

            ]
          }]
        };
        return option
      }
    },
    methods: {
      ...mapActions([
        'getInfoData'
      ]),
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
<style scoped lang="less">
 .pie-container{
   background-color: #fff;
   margin-top: 15px;
   padding-bottom: 15px;
 }
 .head{
   background-color: #00a6e2;
   display: flex;
   padding: 10px 10px 15px 10px;
   .item {
     flex: 1;
     color: #fff;
     text-align: center;
     .title{
       font-size:12px ;
     }
     .num{
       font-size: 18px;
       margin-top: 15px;
     }
   }
 }
 .pie-title{
   padding: 15px;
 }
 .money-detail{
   list-style: none;
   width: 100%;
   margin-top: 20px;
   li{
     width: 250px;
     margin: 10px auto 0;
     height: 20px;
     line-height: 20px;
     font-size: 12px;
     position: relative;
   }
   .circle{
     width: 10px;
     height: 10px;
     border-radius: 5px;
     display: inline-block;
     position: absolute;
     left: 0;
     top: 5px;
   }
   .m_m{
     font-size: 12px;
     color: #aaa;
     padding-left: 30px;
   }
   .m_i{
     font-size: 12px;
     color: #000;
     float: right;
   }
   .ye{
     background-color: #4cafff;
   }
   .jd{
     background-color:#763cff ;
   }
   .dca{
     background-color:#fa394c ;
   }
   .dcb{
     background-color:#ff660a ;
   }
   .zt{
     background-color:#ffaf32 ;
   }
   .zq{
     background-color:#2ce4a6 ;
   }
 }
</style>
