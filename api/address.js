import request from '@/utils/request.js';
//商品类型
export function reqAddress() {
  return request({
    url: "/user/address/list", //请求头
    method: "get", //请求方式
  })
}
// /user/address/add
export function reqAddRess(data) {
  return request({
    url: "/user/address/add", //请求头
    method: "post", //请求方式
    data:data
  })
}