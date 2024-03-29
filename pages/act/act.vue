<template>
  <view class="home">
    <custom-head-bar id="customHeadBar"></custom-head-bar>
    <view class="wrapper">
      <view class="infoModel">
        <view class="left">免费配送
        </view>
        <navigator url="/pages/order/order" class="right">
          <u-icon name="order" color="#576b95" size="22"></u-icon>
          我的订单
        </navigator>
      </view>
      <view class="scrollLayout">
        <view class="leftScroll">
          <scroll-view scroll-y class="sContent" :scroll-top="leftScrollValue">
            <view class="navitem" :class="index==navIdx?'active':''" v-for="(item,index) in labData" :key="item.id"
              @click="clickNav(index)">{{item.name}}</view>
          </scroll-view>
        </view>
        <view class="rightScroll">

          <navigator url="/pages/order/search/search" class="searchView">
            <u-icon name="search" size="22" color="#576b95"></u-icon>
            搜索
          </navigator>
          <scroll-view :scroll-top="rightScrollValue" scroll-y scroll-with-animation class="sContent">
            <view class="productView" v-for="item in itemData">
              <u-sticky :customNavHeight="0" zIndex="2">
                <!-- <view class="proTitle">{{tapComputer()}}</view> -->
              </u-sticky>
              <view class="proContent">
                <view class="proitem" v-for="pro in itemData">
                  <product-item :item="pro"></product-item>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>

      </view>
    </view>


    <car-layout v-if="buyNum>0"></car-layout>
  </view>
</template>
<script>
  import cellGroup from '../../uni_modules/uview-ui/libs/config/props/cellGroup';
  import api from '@/axios/request.js';
  import request from "@/utils/request.js"
  import {
    reqshopType,
    reqshopData,
    reqshopID
  } from "@/api/shop.js"
  import {
    mapState
  } from "vuex"
  export default {
    data() {
      return {
        albumWidth: 0,
        navIdx: 0,
        rightScrollValue: 0,
        leftScrollValue: 0,
        buyNum: 1,
        rightScrllArr: [],
        leftScrollArr: [],
        foldState: false,
        labData: [],
        shopData: [],
        queryParams: {
          page: 1,
          pageSize: 5
        },
        itemData: [],
      }
    },
    onLoad() {
      this.$nextTick(() => {
        this.getHeightArr(["vueValue1"])
      })
      this.shopTypeData()
      this.shopShow()

    },
    computed: {
      // ...mapState()

    },
    methods: {
      shopShow() {
        // reqshopID().then(res =>{
        //   console.log(res);
        // })
      },
      // 商品类型
      shopTypeData() {
        reqshopType().then(res => {
          this.labData = res.data
          // console.log(this.labData)
        })
      },

      // 点击菜单
      clickNav(index) {
        if (this.navIdx == index) return;
        this.navIdx = index;
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        let typeID = index + 1
        reqshopID(typeID).then(res =>{
          this.itemData = res.data
          
          console.log(this.itemData);
        })
        this.timeout = setTimeout(() => {
          this.rightScrollValue = this.rightScrllArr[index];
          this.leftScrollValue = this.leftScrollArr[index];
        }, 100)
      },
      // 获取滚动条内容高度
      getHeightArr() {
        let selector = uni.createSelectorQuery();
        // 获取自定义导航的高度
        let customHeadBar;
        selector.select("#customHeadBar").boundingClientRect(rects => {
          customHeadBar = rects.height
        }).exec()

        // 右页面高度
        selector.selectAll(".productView").boundingClientRect(rects => {
          this.rightScrllArr = rects.map(item => item.top - customHeadBar - 50)
        }).exec()

        // 左侧高度
        selector.selectAll(".navitem").boundingClientRect(rects => {
          this.leftScrollArr = rects.map(item => item.top - customHeadBar - 50)
        }).exec()

      },
      // 监听右侧滚动
      rightScrollMes(e) {
        let scrollTop = Math.ceil(e.detail.scrollTop);
        let idx = this.rightScrllArr.findIndex((value, index, arr) => scrollTop >= value && scrollTop < arr[index + 1]);
        this.navIdx = idx + 1;
        this.leftScrollValue = this.leftScrollArr[idx];

        if (scrollTop < 300) {
          this.foldState = false
        }
        if (scrollTop > 400) {
          this.foldState = true
        }
      }

    }
  }
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .wrapper {
      flex: 1;
      background: #fff;
      border-radius: 10px 10px 0 0;
      margin-top: -10px;
      position: relative;
      z-index: 2;
      overflow: hidden;

      .infoModel {
        color: $text-font-color-1;
        @include flex-box();
        height: 50px;
        background: #fff;
        padding: 0 30rpx;
        font-size: 32rpx;
        border-bottom: 1px solid $border-color;

        .right {
          @include flex-box();
          color: $brand-theme-color-aux;
        }
      }

      .scrollLayout {
        height: calc(100% - 100rpx);
        @include flex-box();

        .leftScroll {
          height: 100%;
          width: 190rpx;
          border-right: 1px solid $border-color;
          background: $page-bg-color;

          .navitem {
            font-size: 30rpx;
            padding-left: 30rpx;
            line-height: 100rpx;
            color: $text-font-color-2;
            position: relative;

            &.active {
              color: $text-font-color-1;
              background: #fff;

              &::after {
                content: "";
                width: 6rpx;
                height: 30rpx;
                background: $brand-theme-color;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
              }
            }
          }
        }

        .rightScroll {
          height: 100%;
          flex: 1;
          position: relative;

          .searchView {
            position: absolute;
            top: 0;
            right: 30rpx;
            z-index: 3;
            @include flex-box-set();
            height: 90rpx;
            color: $brand-theme-color-aux;
          }

          .productView {
            padding: 0 30rpx;

            .proTitle {
              line-height: 90rpx;
              font-size: 30rpx;
              background: #fff;
            }
          }
        }

        .sContent {
          height: 100%;
        }
      }
    }

  }
</style>