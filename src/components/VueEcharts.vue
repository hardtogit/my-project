<template>
    <div ref="myChart" style="width: 200px;height: 200px">

    </div>
</template>
<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入饼图组件
  require('echarts/lib/chart/pie')

  export default {
    props: {
      options: {
        type: Object
      },
      width: {
        type: Number,
        default: 200
      },
      height:{
        type:Number,
        default:200
      }
    },
    methods: {
      back () {
        this.$router.push(this.backTo)
      }
    },
    mounted(){
      let myChart= echarts.init(this.$refs.myChart);
      console.log(this.$refs.myChart)
//      let option = {
//        tooltip: {
//          trigger: 'item',
//          formatter: "{a} <br/>{b}: {c} ({d}%)"
//        },
//        legend: {
//          orient: 'vertical',
//          x: 'left',
//          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//        },
//        series: [
//          {
//            name:'访问来源',
//            type:'pie',
//            radius: ['50%', '70%'],
//            avoidLabelOverlap: false,
//            label: {
//              normal: {
//                show: false,
//                position: 'center'
//              },
//              emphasis: {
//                show: true,
//                textStyle: {
//                  fontSize: '30',
//                  fontWeight: 'bold'
//                }
//              }
//            },
//            labelLine: {
//              normal: {
//                show: false
//              }
//            },
//            data:[
//              {value:335, name:'直接访问'},
//              {value:310, name:'邮件营销'},
//              {value:234, name:'联盟广告'},
//              {value:135, name:'视频广告'},
//              {value:1548, name:'搜索引擎'}
//            ]
//          }
//        ]
//      }
        myChart.setOption(this.options);

    },
  }
</script>
<style scoped>

</style>
