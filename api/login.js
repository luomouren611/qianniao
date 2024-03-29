// 用户管理接口
import request from '@/utils/request.js';

//登录
export function reqLogin(data) {
  return request({
    url: "/user/login", //请求头
    method: "post", //请求方式
    data:data
  })
}
