<template>
  <view class="contain">
    <u-transition :show="show" duration="1000" mode="fade-up">
    <view class="top">
      <text class="auto">Find your next</text>
      <text class="bot">dedication</text>
    </view>
    <view class="mid">
      <text class="tips">90+ million coder</text>
      <text class="tips">together choice</text>
    </view>
    <view class="bottom">
      <view class="pic">
        <image class="img1" src="../../static/login/Group 197.svg" mode="aspectFit"></image>
      </view>
      <view class="edit">
        <u-button @click="gohome()" class="btn1" shape="circle" plain color="#fff" text="Get Start"></u-button>
        <!-- <view @click="gohome" class="login" shape="circle" plain color="#fff">login</view> -->
      </view>

    </view>
    </u-transition>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      };
    },
    methods: {
      gohome() {
        console.log(123);
        uni.navigateTo({
          url: '/pages/login/login',     
        });
      }
    }
  }
</script>

<style lang="scss">
  .contain {
    height: 100%;
    width: 100vw;
    .top {
      padding: 80rpx 0 20rpx 0rpx;
      font-size: 52rpx;
      font-weight: 900;
      justify-content: center;
      flex-direction: column;
      display: flex;
      align-items: center;

      .auto {
        color: black;
      }
    }

    // 中间
    .mid {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 36rpx;

      .tips:first-child {
        font-size: 42rpx;
      }
    }

    // 底部 
    .bottom {
      display: flex;
      flex-direction: column;

      .pic {
        // width: 1000rpx;
        width: 750rpx;
        height: 600rpx;

        image {
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }

      .edit {
        z-index: 1;
        background-image: url('../../static/login/Rectangle 32.svg');
        background-size: cover;
        margin: -20rpx 0;
        // display: flex;
        // flex-direction: column;

        .btn1 {
          width: 70%;
          z-index: -1;
          // position: absolute;
          margin: 200rpx 0;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #8DBABE;
          // z-index: 0;
        }

        .login {
          color: #8DBABE;
          font-size: 48rpx;
          position: relative;
          top: -200rpx;
          left: 45%;
        }

        .login:hover {
          width: 70%;
          z-index: -1;
          // position: absolute;
          margin: 200rpx 0;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #8DBABE;
        }

        image {
          width: 100%;
          position: relative;
          top: -19rpx;
        }
      }
    }


  }
</style>