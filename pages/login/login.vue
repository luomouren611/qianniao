<template>
  <view class="contain">
    <!-- 头部 -->
    <view class="top">
      <view class="logo">
        <image src="../../static/login/logo.png" mode="aspectFit"></image>
      </view>
    </view>
    <!-- box -->
    <view class="mid">
      <view class="box">
        <u-skeleton rows="6" title :animate="true" loading v-show="foldState"></u-skeleton>
        <u--form ref="loginForm" v-show="!foldState">
          <view class="text">账号</view>
          <u-form-item>
            <u--input v-model="loginForm.username" placeholder="请输入账号" border="bottom" clearable></u--input>
          </u-form-item>
          <view class="text">密码</view>
          <u-form-item>
            <!-- <view class="text">账号</view> -->
            <u--input v-model="loginForm.password" type="password" placeholder="请输入密码" border="bottom" clearable>
            </u--input>
          </u-form-item>
        </u--form>

      </view>
    </view>

    <view class="bot">

      <u-button class="button" @click="login()" type="primary" shape="circle"
        size="middle">登录</u-loading-icon></u-button>
      <view class="text">
        登录即表示接受
        <text style="color: #98cbfe;">《用户协议》</text>与
        <text style="color: #98cbfe;">《隐私协议》</text>
      </view>
    </view>
    <u-divider text="第三方软件登录" :hairline="true"></u-divider>
    <view class="last">
      <image @click="toast" src="/static/login/微信.svg" mode="aspectFit"></image>
      <image @click="toast" src="/static/login/支付宝.svg" mode="aspectFit"></image>
      <image @click="toast" src="/static/login/微博.svg" mode="aspectFit"></image>
    </view>

  </view>
</template>

<script>
  import {
    reqLogin
  } from "@/api/login.js"
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: null,
          token: '',
        },
        foldState: false
      };
    },
    onLoad() {

    },
    computed: {
      foldStatus() {
        return false
      }
    },
    methods: {
      login() {
        const params = this.loginForm
        try {
          reqLogin(params).then(res => {
            console.log(res);
            if (res.code == 200) {
              this.token = res.data
              localStorage.setItem('TOKEN', this.token)
              uni.setStorage({
                key: 'TOKEN',
                data: this.token,
                success: function() {
                  console.log('success');
                }
              });
              this.foldState = true
              uni.showModal({
                title: '登陆成功!'
              })
              setTimeout(() => {
                uni.switchTab({
                  url: '/pages/home/home'
                })
              }, 2000)

            } else {
              uni.showModal({
                title: '请注意',
                content: '账号或密码输入错误'
              })
            }
          })
        } catch (e) {
          //TODO handle the exception
          console.log(e);
        }

      },
      toast() {
        uni.showModal({
          content: "该功能暂未开放！"
        })
      }
    }
  }
</script>

<style lang="scss">
  .contain {
    background-color: #f3f9ff;
    height: 100vh;

    .top {
      height: 400rpx;
      width: 100%;
      background-image: url('../../static/login/登录.svg');
      background-size: cover;
      background-color: #f3f9ff;
      position: relative;
      top: -100rpx;
      left: 150rpx;
      overflow: hidden;

      .logo {
        position: relative;
        top: 60%;
        left: 20%;

        image {
          width: 140rpx;
          height: 140rpx;
          border-radius: 50%;
        }
      }
    }

    .mid {
      .box {
        .text {
          margin: 5rpx 20rpx;
          font-size: 34rpx;
          font-weight: 500;
        }

        // width: 80%;
        padding: 5rpx 60rpx;
      }
    }

    .bot {
      padding: 60rpx 0;

      .button {
        width: 75%;
        box-shadow: 5rpx 5rpx 15rpx #89c1f9;
        background-color: linear-gradient(123deg, #7dc3ff, #0e0bc3);
      }

      .text {
        color: #bebebe;
        display: flex;
        margin: 20rpx 20rpx;
        align-items: center;
        justify-content: center;
        font-size: 24rpx;
      }
    }

    .last {
      display: flex;
      justify-content: space-around;
      padding: 20rpx 60rpx;

      image {
        height: 80rpx;
        width: 80rpx;
      }
    }
  }
</style>