<template>
  <view class="searchLayout">
    <u-search placeholder="请输入搜索内容" v-model="keyword" clearabled showAction actionText="搜索" animation @search="onSearch"
      @custom="onSearch"></u-search>

    <view class="historyList">
      <view class="item" v-for="(item,index) in historyList" :key="item">
        <view class="text">{{item}}</view>
        <view class="close" @click="onClose(index)">
          <u-icon name="close" size="16" color="#999"></u-icon>
        </view>
      </view>
    </view>


  </view>
</template>

<script>
  export default {
    data() {
      return {
        keyword: "",
        historyList: [],
        statusBarHeight: 0,
        titleHeight: 0,
    
      };
    },
    computed: {
    },
    onLoad() {
      let sys = uni.getSystemInfoSync()
      // console.log(sys);
       this.statusBarHeight = sys.statusBarHeight
      // console.log(statusBarHeight);
      let {
        top,
        height
      } = uni.getMenuButtonBoundingClientRect()
      this.titleHeight = height + (top - statusBarHeight) * 2
    },
    computed:{
      totalHeight(){
      	return this.titleHeight
      },
    },
    methods: {
      //搜索事件
      onSearch() {
        this.historyList.unshift(this.keyword)
        this.historyList = [...new Set(this.historyList)];
        uni.setStorageSync("historyList", this.historyList)
      },
      //删除历史
      onClose(index) {
        console.log(index);
        this.historyList.splice(index, 1);
        uni.setStorageSync("historyList", this.historyList)
      }
    }
  }
</script>

<style lang="scss">
  .searchLayout {
    position: relative;
    padding: 10rpx 30rpx;
    height: 500rpx;

    .historyList {
      margin-top: 30rpx;

      .item {
        @include flex-box();
        font-size: 32rpx;
        padding: 30rpx 0;
        color: #333;
        border-bottom: 1px solid $border-color-light;
      }
    }
  }
</style>