<template>
   <div class="input-container">
        <div class="left">

        </div>
        <div class="center">

        </div>
        <div class="right">

        </div>
   </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      },
      backTo: {
        type: String,
        default: '/'
      }
    },
    methods: {
      back () {
        this.$router.push(this.backTo)
      }
    }
  }
</script>
<style scoped lang="less">

</style>
