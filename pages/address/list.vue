<template>
  <view class="selfAddress">
    <view class="headTop">
      <view class="title">地址簿</view>
      <navigator class="addressBtn" url="/pages/address/edit">
        + 添加地址
      </navigator>
    </view>

    <view class="list">
      <view class="item" v-for="item in addressList" :key="id">
        <view class="head">
          <view class="index">{{item.id}}</view>
          <view class="index">{{item.userName}}v</view>
          <view class="user">联系电话({{item.phone}})</view>
          <view class="select">
            <u-button v-if="0" color="#EC544F" plain size="mini" text="默认地址"></u-button>
            <u-button color="#666" v-else plain size="mini" text="设为默认"></u-button>
          </view>
        </view>
        <view class="more">
          地址: {{item.addr}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    reqAddress,
    reqAddRess
  } from '@/api/address.js';
  export default {
    data() {
      return {
        addressList: ''
      };
    },
    onLoad() {
      this.getList()
    },
    methods: {
      getList() {
        reqAddress().then(res => {
          this.addressList = res.data
          console.log(this.addressList);
        })
      },

    }
  }
</script>

<style lang="scss">
  page {
    background: $page-bg-color;
  }

  .selfAddress {
    padding: 30rpx;

    .headTop {
      @include flex-box();
      font-size: 30rpx;
      font-weight: bold;

      .addressBtn {
        border: 1px solid #000;
        border-radius: 50rpx;
        padding: 6rpx 15rpx;
      }
    }

    .list {
      padding-top: 30rpx;

      .item {
        background: #fff;
        padding: 40rpx 20rpx;
        margin-bottom: 30rpx;
        border-radius: 15rpx;

        .head {
          @include flex-box();
          font-weight: bold;
        }

        .more {
          font-size: 28rpx;
          color: $text-font-color-3;
          padding-top: 10rpx;
        }
      }
    }
  }
</style>