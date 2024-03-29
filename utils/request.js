import axios from "axios";
//创建axios实例
const request = axios.create({
  baseURL: '/api', // 基础请求地址
  timeout: 5000, // 请求超时时间,
  headers:{
    authentication:localStorage.getItem('TOKEN'),
  }
})
//请求拦截器
request.interceptors.request.use(config => {
  const token = localStorage.getItem('TOKEN')
  config['headers'].Authorization = token
  return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  //处理网络错误
  let msg = '';
  const status = error.response.status;
  switch (status) {
    case 401:
      msg = "token过期";
      break;
    case 403:
      msg = '无权访问';
      break;
    case 404:
      msg = "请求地址错误";
      break;
    case 500:
      msg = "服务器出现问题";
      break;
    default:
      msg = "无网络";

  }
  uni.showModal({
    title:'请注意',
    content: msg
  })
  return Promise.reject(error);
});

export default request;