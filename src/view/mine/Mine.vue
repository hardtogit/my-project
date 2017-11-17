<template>
  <div class="mine">
    <div class="header">
      账户
    </div>
    <div class="content">
      <div v-if="user">
    <div class="userAccount" >
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
      <div class="bar">
        <div class="left">
          {{user.amount}}
        </div>
        <div class="center">
           账户安全保障中
        </div>
        <div class="right">
          <span class="arrows"></span>
        </div>
      </div>
      <div class="bar">
        <div class="left">
          <img src="../../assets/images/9.png" alt="">
          <span>回款日历</span>
        </div>
        <div class="center"></div>
        <div class="right">
          <span class="arrows"></span>
        </div>
      </div>
        <div class="grid">
          <div class="left item">
            <img src="../../assets/images/3.png" alt="">
            <div class="text">
              <div class="title">充值</div>
              <div class="sub-text">{{user.balance}}</div>
            </div>
          </div>
          <div class="right item">
            <img src="../../assets/images/8.png" alt="">
            <div class="text">
              <div class="title">自动投标</div>
              <div class="sub-text">省时省心</div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="left item">
            <img src="../../assets/images/4.png" alt="">
            <div class="text">
              <div class="title">定存宝A</div>
              <div class="sub-text">{{user.deposit == 0 && '到期还本付息' || '+' + user.deposit}}</div>
            </div>
          </div>
          <div class="right item">
            <img src="../../assets/images/16.png" alt="">
            <div class="text">
              <div class="title">定存宝B</div>
              <div class="sub-text">{{user.depositb == 0 && '每月还息  到期还本' || '+' + user.depositb}}</div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="left item">
            <img src="../../assets/images/7.png" alt="">
            <div class="text">
              <div class="title">直投项目</div>
              <div class="sub-text">{{user.directInvest == 0 && '期限灵活门槛低' || '+' + user.directInvest}}</div>
            </div>
          </div>
          <div class="right item">
            <img src="../../assets/images/5.png" alt="">
            <div class="text">
              <div class="title">债权转让</div>
              <div class="sub-text">{{user.creditors == 0 && '流动性高' || '+' + user.creditors}}</div>
            </div>
          </div>
        </div>
        <div class="myList">
          <div class="grid">
            <div class="left item">
              <img src="../../assets/images/10.png" alt="">
              <div class="text">
                <div class="title">红包</div>
                <div class="sub-text">{{user.directInvest == 0 && '期限灵活门槛低' || '+' + user.directInvest}}</div>
              </div>
            </div>
            <div class="right item">
              <img src="../../assets/images/13.png" alt="">
              <div class="text">
                <div class="title">加息劵</div>
                <div class="sub-text">{{user.creditors == 0 && '流动性高' || '+' + user.creditors}}</div>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="left item">
              <img src="../../assets/images/gift.png" alt="">
              <div class="text">
                <div class="title">周五狂想礼</div>
                <div class="sub-text">{{user.directInvest == 0 && '期限灵活门槛低' || '+' + user.directInvest}}</div>
              </div>
            </div>
            <div class="right item">
              <img src="../../assets/images/14.png" alt="">
              <div class="text">
                <div class="title">抵用券</div>
                <div class="sub-text">{{user.creditors == 0 && '流动性高' || '+' + user.creditors}}</div>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="left item">
              <img src="../../assets/images/10.png" alt="">
              <div class="text">
                <div class="title">积分商城</div>
                <div class="sub-text">{{user.directInvest == 0 && '期限灵活门槛低' || '+' + user.directInvest}}</div>
              </div>
            </div>
            <div class="item right">

            </div>
          </div>
        </div>
      </div>
    <div class="loading" v-else>
      <PageLoading></PageLoading>

    </div>
    </div>
  </div>
</template>

<script>
  import PageLoading from '../../components/PageLoading.vue'
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'home',
    data() {
      return {
        msg: ''
      }
    },
    components:{
      PageLoading
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
    padding-bottom: 44px;
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
    padding-bottom: 10px;
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
    margin-bottom: 15px;
    .headerImg{
      width: 55px;
      height: 55px;
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
  .bar{
    display: flex;
    padding: 0px 15px ;
    height: 65px;
    align-items: center;
    border-bottom:1px solid #ddd;
    background-color: #fff;
    .left{
      flex: 1;
      font-size: 20px;
      font-weight:normal;
      img{
        display: block;
        width: 30px;
        height: 30px;
        float: left;
        margin-right: 10px;
      }
      span{
        font-size: 14px;
      }
    }
    .center{
      flex: 1;
      font-size: 14px;
      color:#888;
      text-align: right;
      padding-right: 40px;
    }
    .right{
      flex: 0px 0;
      height: 24px;
    }
  }
  .grid{
    display: flex;
    padding: 0px 15px ;
    height: 65px;
    align-items: center;
    border-bottom:1px solid #ddd;
    background-color: #fff;
    .item{
      flex: 1;
      height: 65px;
      align-items: center;
      img{
        float: left;
        margin-top: 16px;
        width: 30px;
      }
      .text{
        float: left;
        margin-left: 10px;
        .title{
          height: 20px;
          font-size: 14px;
          margin-top: 12px;
          padding: 0;
        }
        .sub-text{
          height: 20px;
          font-size: 12px;
          margin: 0;
          padding: 0;
          color: rgb(136, 136, 136);
        }
      }

    }
    .left{
      border-right: 1px solid #ddd;
    }
    .right{
      img{
        margin-left: 10px;
      }
    }
  }
  .myList{
    margin-top: 15px;
  }
  .loading{
    width: 100%;
    height: 100%;
  }
</style>
