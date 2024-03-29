<template>
  <view class="content">
    <view class="cont-top" style="">
    </view>
    <view class="cont-main">
      <view class="m-scan">
        <image @click="scanCodeHandle()" src="../../static/asset/扫码.png" mode="aspectFit"></image>
        <text>扫一扫</text>
      </view>
      <view class="m-scan">
        <image @click="cardBox" src="../../static/asset/银行卡1.png" mode="aspectFit"></image>
        <text>卡包</text>
      </view>
      <view class="m-scan">
        <image src="../../static/asset/公告.png" mode="aspectFit"></image>
        <text>上机提示</text>
      </view>
      <view class="m-scan">
        <image src="../../static/asset/站点.png" mode="aspectFit"></image>
        <text>附件网咖</text>
      </view>
    </view>
    <view class="cont-bot">
      <u-notice-bar bgColor="#fff" color="#c69783" :text="text1"></u-notice-bar>
      <view class="cont-bot-title">
        上网专区
      </view>
      <view class="card">
        <view class="card1">
          <text>加盟咨询</text>
          <view class="card-min"></view>
          <image src="../../static/asset/nodata.png" mode="aspectFit"></image>
        </view>
        <view class="card-right">
          <view class="card2">
            <text>上网规范</text>
            <view class="card-min"></view>
            <view class="card-mi"></view>
          </view>
          <view class="card3">
            <text>问卷调查</text>
            <view class="card-min"></view>
            <image src="../../static/asset/nocontent.png" mode="aspectFit"></image>
          </view>
        </view>

      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        text1: '千鸟网咖限时福利，充50再豪送100，邀请好友再得100',
      }                                                                                     
    },
    onLoad() {
      this.requestTask()
      let sys = uni.getSystemInfoSync()
      // console.log(sys);
      let statusBarHeight =ref(sys.statusBarHeight) 
      // console.log(statusBarHeight);
      let {top,height} = uni.getMenuButtonBoundingClientRect()
      console.log(top,height);
      let titleHeight = height + (top - statusBarHeight)*2
      console.log(titleHeight);
    },
    methods: {
      // 点击扫码按钮
      scanCodeHandle() {
        uni.scanCode({
          success: function(res) {
            console.log('条码类型：' + res.scanType);
            console.log('条码内容：' + res.result);
          }
        });
      },
      cardBox(){
        uni.navigateTo({
          url:'/pages/other/other'
        })
      },
      requestTask() {
        uni.request({
          url: 'http: //localhost:5173/api/dish/page/1/3', //仅为示例，并非真实接口地址。
          data: {
            text: 'uni.request'
          },
          success: function(res) {
            console.log(反应成功);
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    background-color: #f2f4f5;
    z-index: -1;
    // width: 100vw;
    height: 100%;

    .cont-top {
      width: 100%;
      height: 350rpx;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    .cont-top::after {
      content: '';
      width: 130%;
      height: 350rpx;
      position: absolute;
      left: -15%;
      top: 0;
      border-radius: 0 0 50% 50%;
      background: #185df1;
      background: url("../../static/asset/网咖.png");
      background-size: cover;
    }

    .cont-main {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 30rpx 20rpx;
      height: 250rpx;
      width: 95%;
      border-radius: 20rpx;
      background-color: #ffffff;

      .m-scan {
        height: 150rpx;
        width: 150rpx;
        box-shadow: 5rpx 5rpx 10rpx 5rpx #ccd5dc;
        display: flex;
        flex-direction: column;
        align-items: center;
        // border: 1rpx solid black;
        // background: linear-gradient(115deg, #ffffff, #c4e4ff);
        border-radius: 12rpx;

        image {
          width: 100%;
          height: 100rpx;
        }

        text {
          margin: 5rpx 20rpx;
          font-size: 26rpx;
          font-weight: 600;
          color: #575b5e;
        }
      }
    }

    .cont-bot {
      .cont-bot-title {
        margin: 20rpx 10rpx;
        font-size: 34rpx;
        font-weight: 550;
      }

      .card {
        // background-color: #feddbb;
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 450rpx;

        .card1 {
          margin: 10rpx;
          height: 380rpx;
          width: 350rpx;
          border-radius: 15rpx;
          background: linear-gradient(115deg, #ffffff, #7aaffc);
          box-shadow: 5rpx 6rpx 20rpx #f8f8f8;
          z-index: 1;
          overflow: hidden;

          text {
            position: absolute;
            font-size: 46rpx;
            font-weight: 600;
            margin: 120rpx 30rpx;
            color: #7aaffc;
            // box-shadow: 10rpx 10rpx 10rpx #7aaffc;
          }

          .card-min {
            position: relative;
            top: -63rpx;
            left: 195rpx;
            width: 189rpx;
            height: 189rpx;
            border: 40rpx solid #e1ebf9;
            border-radius: 50%;
            z-index: -1;

          }

          image {
            height: 240rpx;
            width: 100%;
            position: relative;
            // background-color: #185df1;
            top: -40rpx;
            left: 60rpx;
          }

          // background-color: #b6eee1;
        }

        .card-right {
          margin: 10rpx;
          display: flex;
          flex-direction: column;
          // overflow: hidden;

          .card2 {
            height: 180rpx;
            width: 350rpx;
            background: linear-gradient(115deg, #f4f4f4, #aee3d7);
            margin: 10rpx;
            border-radius: 15rpx;
            overflow: hidden;
            z-index: 1;
            position: relative;

            >text {
              position: relative;
              // margin: 0rpx 10rpx;
              top: 55rpx;
              left: 80rpx;
              font-size: 42rpx;
              font-weight: 550;
              color: #b0ded3;
            }

            .card-min {
              position: relative;
              top: -120rpx;
              left: 245rpx;
              width: 169rpx;
              height: 169rpx;
              border: 40rpx solid #fafafa;
              border-radius: 50%;
              // z-index: -1;
            }

            .card-mi {
              position: relative;
              bottom: 130rpx;
              right: 75rpx;
              width: 169rpx;
              height: 169rpx;
              border: 40rpx solid #fafafa;
              border-radius: 50%;
              z-index: -1;
            }
          }

          .card3 {
            height: 180rpx;
            width: 350rpx;
            // background-color: #889ffd;
            margin: 10rpx;
            border-radius: 15rpx;
            background: linear-gradient(115deg, #ffffff, #889ffd);

            >text {
              position: relative;
              // margin: 0rpx 10rpx;
              top: 55rpx;
              left: 50rpx;
              font-size: 42rpx;
              font-weight: 550;
              color: #7f93fd;
            }

            >image {
              margin: 10rpx 120rpx;
              height: 100rpx;
              width: 100%;

            }
          }
        }
      }
    }
  }
</style>