<template>
    <div ref="myChart" :style="containerStyle">

    </div>
</template>
<script>
  // 引入基本模板
  let echarts = require('echarts')
  // 引入饼图组件
//  require('echarts/lib/chart/pie')

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
    computed: {
      // 计算属性的 getter
      containerStyle: function () {
        // `this` 指向 vm 实例
        return 'width:'+this.width+'px;'+'height:'+this.height+'px'
      }
    },
    mounted(){
      let myChart= echarts.init(this.$refs.myChart);
      myChart.setOption(this.options);
    },
  }
</script>
<style scoped>

</style>
