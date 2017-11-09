<template>
  <div class="mine">
    <div class="header">
      账户
    </div>
    <div class="content">
    <div class="userAccount" v-if="user">
      <div class="headerImg">
        <img src="https://bao-image.oss-cn-hangzhou.aliyuncs.com/static/web/images/header/1.jpg">
      </div>
      <div class="nameCenter"><p>{{user.name}}</p>
        <p>
          <a><img src="../../assets/images/my-index/2.png">普通会员</a>
        </p>
      </div>
      <div class="rightArrows"><a href="/user/setting"><span class="arrows"></span></a></div>
    </div>
    <div v-else>


    </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'home',
    data() {
      return {
        msg: ''
      }
    },
    components:{

    },
    created() {
      this.getUser();
    },
    computed: {
      ...mapState({'user': state => (state.user.data)}),
    },
    methods: {
      ...mapActions([
        'getUser'
      ]),
    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .mine {
    .header {
      background: #fff;
      height: 50px;
      width: 100%;
      text-align: center;
      line-height: 50px;
      font-size: 17px;
      color: #333;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }
  .content{
    padding-top: 50px;
  }
  .userAccount{
    overflow: hidden;
    position: relative;
    padding: 15px;
    z-index: 5;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
    margin-top: 15px;
    .headerImg{
      width: 55px;
      float: left;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .nameCenter{
      float: left;
      height: 55px;
      margin-left: 15px;
      p{
        font-size: 20px;
        color: #898989;
        padding: 0;
        margin: 0;
        margin-top: 8px;
        font-family: Hiragino Sans GB,Arial,Helvetica,sans-serif;
        font-weight: 400;
      }
      a{
        font-size: 12px;
        color: #00a6e2;
        text-decoration: none;
        padding: 0;
        position: relative;
        top: -8px;
      }
      img{
        display: inline-block;
        position: relative;
        top: 5px;
        margin-right: 8px;
      }
    }
  }
  .rightArrows{
    float: right;
    margin-top: 20px;
  }
  .arrows{
    position: relative;
  }
  .arrows:after, .arrows:before {
    border: 10px solid transparent;
    border-left: 10px solid #fff;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    right: 0;
    content: ' ';
  }
  .arrows:before {
    border-left-color: #b6b6b6;
    right: -2px;
  }


</style>
