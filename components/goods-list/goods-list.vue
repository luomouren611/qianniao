<template>
  <view class="goodsLayout">
    <view class="wrapper">
      <view class="title">共{{carTotalNum}}件商品</view>

      <view class="list">
        <view class="row" v-for="(item,index) in carData">
          <view class="left">
            <image :src="item.image" mode="aspectFill" class="img"></image>
            <view class="name">{{item.name}}</view>
          </view>
          <view class="center">×{{item.numvalue}}</view>
          <view class="right">
            <view class="big">￥{{item.costPrice}}</view>
            <view class="small">￥22.3</view>
          </view>
        </view>
      </view>

      <view @click="getShowCar" class="total">
        <text>
          已优惠￥10.2，
        </text> 合计 <text class="big">￥{{total}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    reqShowCar
  } from '@/api/car.js';
  import {
    reqCarTotal,
    reqTotal
  } from "@/api/car.js"
  export default {
    name: "goods-list",
    data() {
      return {
        carData: {},
        carTotalNum: 0,
        total:0,
      };
    },
    mounted() {
      this.getShowCar();
      this.carTotal();
      this.allTotal();
    },
    methods: {
      // 购物车数量
      carTotal() {
        reqCarTotal().then(res => {
          this.carTotalNum = res.data
          console.log(res.data);
        })
      },
      allTotal() {
        reqTotal().then(res => {
          this.total = res.data
          console.log(res.data);
        })
      },
      getShowCar() {
        reqShowCar().then(res => {
          this.carData = res.data
          console.log(res.data);
        })
      }
    }
  }
</script>

<style lang="scss">
  .goodsLayout {
    .wrapper {
      background: #fff;
      padding: 30rpx;
      margin-bottom: 25rpx;
      border-radius: 15rpx;

      .title {
        font-size: 38rpx;
      }

      .list {
        .row {
          @include flex-box();
          padding: 25rpx 0;

          .left {
            @include flex-box();
            width: 400rpx;

            .img {
              width: 64rpx;
              height: 64rpx;
              border-radius: 10rpx;
            }

            .name {
              padding-left: 15rpx;
              flex: 1;
              font-size: 30rpx;
            }
          }

          .center {
            width: 100rpx;
            text-align: center;
          }

          .right {
            flex: 1;
            text-align: right;
            font-weight: bold;

            .big {
              font-size: 34rpx;
            }

            .small {
              font-size: 22rpx;
              color: $text-font-color-3;
              text-decoration: line-through;
            }
          }
        }
      }

      .total {
        padding: 30rpx 0;
        text-align: right;
        font-size: 30rpx;
        color: $text-font-color-3;

        .big {
          font-size: 36rpx;
          font-weight: bold;
          color: #000;
        }
      }
    }
  }
</style>