// 用户管理接口
import request from '@/utils/request.js';

//商品类型
export function reqshopType() {
  return request({
    url: "/type/list", //请求头
    method: "get", //请求方式
  })
}
// 商品数据
export function reqshopData(page, pageSize) {
  return request({
    url: `/dish/page/ + ${page}/${pageSize}`, //请求头
    method: "get", //请求方式
  })
}

export function reqshopID(typeId) {
  return request({
    url:`/dish/typeId?typeId=${typeId}`, //请求头
    method: "get", //请求方式
  })
}

// 登录
export function reqLogin(data) {
  return request({
    url: "/user/login", //请求头
    method: "post", //请求方式
    data:data
  })
}
// 获取验证码
export function reqGetCode(data) {
  return request({
    url: "/user/sendMsg", //请求头
    method: "post", //请求方式
    data:data
  })
}


// 短信登录
// /user/phoneLogin   /user/sendMsg
export function reqPhone(data) {
  return request({
    url: "/user/phoneLogin ", //请求头
    method: "post", //请求方式
    data:data
  })
}
