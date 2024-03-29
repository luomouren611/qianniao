<template>
  <view class="content">
    <view class="header">
      <view class="avatat">
        <image src="/static/asset/电脑.png" mode="aspectFill"></image>
      </view>
      <view class="umessage">
        <view class="uname">浩文</view>
        <view class="pic">
          <image src="../../static/my/分组 1.svg" mode="aspectFill"></image>
          <view class="text">高级认证</view>
        </view>
      </view>
      <view class="uedit">
        <view class="myedit">
          <u-icon name="edit-pen" size="20"></u-icon>
          <text>编辑资料</text>
        </view>
      </view>
    </view>
    <view class="blackCard">
      <view class="left">
        <image src="../../static/my/vip.svg" mode="aspectFit"></image>
        <text>成为vip，即可享受折扣</text>
      </view>
      <view class="right">
        成为会员
      </view>
    </view>
    <view class="myorder">
      <text class="text">我的订单</text>
      <view class="icons">
        <view class="pic" v-for="item in 4">
          <image @click="order" src="../../static/asset/公告.png" mode="aspectFill"></image>
          <text>我的订单</text>
        </view>


      </view>
    </view>
    <view class="footer">
      <view class="footcontain">
        <view class="foot-top">
          特色服务
        </view>
        <view class="boxcontain">
          <u-grid :border="false" col="4">
            <u-grid-item class="grid" v-for="(listItem,index) in list" :key="index">
              <image @click="goTask(index)" :src="listItem.name" mode="aspectFit"></image>
            </u-grid-item>
          </u-grid>
          <u-toast ref="uToast" />
        </view>
      </view>

    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        list: [{
            name: '/static/my/礼券卡包.svg',
            title: '礼券卡包',
            index: 1
          },
          {
            name: '/static/my/联系我们.svg',
            title: '联系我们',
            index: 2
          },
          {
            name: '/static/my/设置中心.svg',
            title: '设置中心',
            index: 3
          },
          {
            name: '/static/my/收货地址.svg',
            title: '收货地址',
            index: 4
          },
          {
            name: '/static/my/意见建议.svg',
            title: '意见建议',
            index: 5
          },
          {
            name: '/static/my/精彩活动.svg',
            title: '精彩活动',
            index: 6
          },
        ],
      }
    },
    methods: {
      order() {
        uni.navigateTo({
          url: '/pages/order/order'
        })
      },
      goTask(index){
         switch (index) {
                case 3:
                uni.navigateTo({
                  url:'/pages/address/list'
                })
                  break;
                // 添加更多的 case 来处理其他索引
                default:
                  console.log("Unhandled index:", index);
                  break;
              }
      }
    }
  }
</script>
<style scoped lang="scss">
  .content {
    height: 100vh;
    width: 100vw;
    background-color: #f8f9fc;

    .header {
      height: 390rpx;
      width: 100%;
      background-size: cover;
      background-image: linear-gradient(to top, #f1f2f3 0%, #c1c7d7 70%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 5rpx 5rpx 15rpx #373948;
      // padding: auto 5rpx;
      // justify-content: center;

      .avatat {
        height: 120rpx;
        width: 120rpx;
        margin: 0 40rpx;

        image {
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      }

      .umessage {
        margin-left: -140rpx;

        .uname {
          font-size: 38rpx;
          font-size: 650;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          color: #373948;
        }

        .pic {
          padding: 4rpx;
          margin-top: 14rpx;
          height: 60rpx;
          width: 186rpx;
          background-color: #fff;
          border-radius: 28rpx;
          display: flex;
          align-items: center;

          // font-size: 30rpx;
          image {
            padding: 5rpx;
            height: 36rpx;
            width: 36rpx;
          }

          .text {
            font-size: 30rpx;
            padding: 2rpx;
            color: #F2A922;
          }
        }
      }

      .uedit {
        margin-right: 30rpx;

        .myedit {
          display: flex;
          margin: 6rpx;

          text {
            padding: 0 6rpx;
            font-size: 32rpx;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          }
        }
      }
    }

    .blackCard {
      background: url('../../static/asset/my_background.png') no-repeat;
      background-size: cover;
      height: 160rpx;
      width: 90%;
      margin-left: 50rpx;
      border-radius: 25rpx;
      margin-top: -50rpx;
      padding: 0 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        flex-direction: column;

        image {
          height: 50rpx;
          height: 50rpx;
          margin: 0 -180rpx;
        }

        text {
          color: #8c7455;
          margin: 10rpx;
          margin-left: 35rpx;
          font-size: 28rpx;
        }
      }

      .right {
        height: 60rpx;
        width: 132rpx;
        border-radius: 25rpx;
        // margin-left: 20rpx;
        background-color: #dbaa65;
        font-size: 28rpx;
        padding: 8rpx 8rpx;
        color: #fafafa;
        box-shadow: 6rpx 4rpx 12rpx #000000;
      }

    }

    .myorder {
      height: 250rpx;
      display: flex;
      // justify-content: center;
      flex-direction: column;
      margin: 50rpx 45rpx;
      width: 90%;
      background-color: #fff;
      box-shadow: 5rpx 5rpx 5rpx #f5f5f5;
      border-radius: 15rpx;

      .text {
        font-size: 36rpx;
        margin: 10rpx 15rpx;
        font-weight: 600rpx;
        color: #373948;
      }

      .icons {
        display: flex;
        flex-direction: row;
        padding: 20rpx 0;

        .pic {
          height: 300rpx;
          width: 25%;
          display: flex;
          // justify-content: center;
          align-items: center;
          flex-direction: column;

          text {
            font-size: 30rpx;
          }

          image {
            height: 80rpx;
            width: 80rpx;
          }
        }
      }
    }

    .footer {

      .footcontain {
        width: 90%;
        background-color: #fff;
        margin: auto;

        .grid {
          image {
            height: 120rpx;
            width: 120rpx;
          }
        }

        .grid-text {
          font-size: 14px;
          color: #909399;
          padding: 10rpx 0 20rpx 0rpx;
          /* #ifndef APP-PLUS */
          box-sizing: border-box;
          /* #endif */
        }
      }

    }
  }
</style>