<template>
  <view class="pro-home">
    <view class="pic">
      <image class="img" :src="item.image" mode="aspectFill"></image>
    </view>
    <view class="text">
      <view class="title">{{item.name}}</view>
      <view class="price">
        <view class="big">￥{{item.costPrice}}</view>
        <view class="small">￥{{item.salesPrice}}</view>
      </view>
      <view class="discount">3折</view>
      <view class="numbox">
        <view class="skuSelect" v-if="false">选规格</view>
        <view class="uNum" v-else>
          	<pro-num-box :item="item"></pro-num-box>
          </u-number-box>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import cellGroup from '../../uni_modules/uview-ui/libs/config/props/cellGroup'
import listItem from '../../uni_modules/uview-ui/libs/config/props/listItem';
  export default {
    data() {
      return {
        value: 1,
      }
    },
    props:{
      item:{
        type:Object,
        defaultValue(){
          return {}
        }
      }
    },
    onLoad() {
      console.log(this.item);
    },
    methods: {
      numChange(e) {
       //  console.log(e);
       // console.log(this.item);
      }
    }
  }
</script>

<style scoped lang="scss">
  .pro-home {
    width: 100%;
    @include flex-box();
    padding: 25rpx 0;

    .pic {
      width: 170rpx;
      height: 170rpx;
      border-radius: 20rpx;
      overflow: hidden;

      .img {
        width: 100%;
        height: 100%;
      }
    }

    .text {
      flex: 1;
      padding-left: 20rpx;
      position: relative;

      .title {
        font-size: 34rpx;
        font-weight: bold;
        @include ellipsis();
      }

      .price {
        @include flex-box-set(start, end);
        font-weight: bold;
        padding: 25rpx 0;

        .big {
          font-size: 34rpx;
          color: $brand-theme-color;
        }

        .small {
          font-size: 26rpx;
          opacity: 0.4;
          text-decoration: line-through;
          padding-left: 10rpx;
        }
      }

      .discount {
        font-size: 22rpx;
        color: $brand-theme-color;
        padding: 3rpx 8rpx;
        border: 1rpx solid $brand-theme-color;
        display: inline-block;
        border-radius: 6rpx;
      }

      .numbox {
        position: absolute;
        right: 0;
        bottom: 0;

        .skuSelect {
          height: 40rpx;
          padding: 0 10rpx;
          background: $brand-theme-color;
          font-size: 28rpx;
          color: #fff;
        }

      }
    }
  }
</style>