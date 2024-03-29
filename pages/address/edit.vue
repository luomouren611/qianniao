<template>
  <view class="addressForm">
    <u--form labelPosition="top" :model="addressForm" :rules="addressRules" labelWidth="100" ref="uForm">

      <u-form-item label="姓名" prop="userName">
        <u--input v-model="addressForm.userName" placeholder="请输入姓名"></u--input>
      </u-form-item>


      <u-form-item label="联系电话" prop="phone">
        <u--input v-model="addressForm.phone" placeholder="请输入联系电话"></u--input>
      </u-form-item>

      <u-form-item label="详细地址" prop="addr">
        <u--input v-model="addressForm.addr" placeholder="请输入街道门牌号"></u--input>
      </u-form-item>

      <u-form-item label="是否默认">
        <u-switch v-model="addressForm.isDefault" inactiveColor="#eee"></u-switch>
      </u-form-item>

      <u-form-item></u-form-item>

      <u-form-item>
        <u-button type="primary" @click="onSubmit">提交</u-button>
      </u-form-item>

    </u--form>
  </view>
</template>

<script>
  import {
    reqAddRess
  } from "@/api/address.js"
  export default {
    data() {
      return {
        addressForm: {
          userName: "",
          phone: "",
          addr: "",
          isDefault: false
        },
        addressRules: {
          userName: [{
            required: true,
            message: '姓名是必填的',
            trigger: ['blur', 'change']
          }, {
            min: 2,
            max: 8,
            message: '长度在2-8个字符之间',
            trigger: ['blur', 'change']
          }],
          phone: [{
            required: true,
            message: '电话是必填的',
            trigger: ['blur', 'change']
          }, {
            validator: (rule, value, callback) => {
              return uni.$u.test.mobile(value);
            },
            message: '手机号码不正确',
            trigger: ['change', 'blur']
          }],
          addr: [{
            required: true,
            message: '地址是必填的',
            trigger: ['blur', 'change']
          }]
        }
      };
    },

    methods: {
      onSubmit() {
        this.$refs.uForm.validate().then(res => {
          console.log(this.addressForm);
          uni.$u.toast('校验通过')
          reqAddRess(this.addressForm).then(res => {
            if (res.code == 200) {
              uni.$u.toast('添加成功,即将跳转回地址页面')
              setTimeout(() => {
                uni.navigateTo({
                  url: '/pages/address/list'
                })
              }, 1000)
            } else {
              uni.$u.toast('请检查地址，网络地址错误！')
            }

          })

        }).catch(errors => {
          uni.$u.toast('校验失败')
        })
      },

      getAddress() {
        console.log(this.addressForm);
        reqAddRess(this.addressForm).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style lang="scss">
  .addressForm {
    padding: 30rpx;
  }
</style>