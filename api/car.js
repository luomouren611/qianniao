
import request from '@/utils/request.js';
//商品类型
export function reqAddShop(data) {
  return request({
    url: "/user/shoppingCart/add", //请求头
    method: "post", //请求方式
    data:data
  })
}
// 展示购物车
// /user/shoppingCart/list
export function reqShowCar() {
  return request({
    url: "/user/shoppingCart/list", //请求头
    method: "get", //请求方式
  })
}
// 清空购物车
// /user/shoppingCart/clean
export function reqDeleAll() {
  return request({
    url: "/user/shoppingCart/clean", //请求头
    method: "get", //请求方式
  })
}
// /user/shoppingCart/count
// 购物车数量
export function reqCarTotal() {
  return request({
    url: "/user/shoppingCart/count", //请求头
    method: "get", //请求方式
  })
}
// 购物车总价格
export function reqTotal() {
  return request({
    url: "/user/shoppingCart/money", //请求头
    method: "get", //请求方式
  })
}