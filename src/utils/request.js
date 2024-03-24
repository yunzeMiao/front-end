import axios from "axios";

let baseURL = "";

//创建axios实例
const request = axios.create({
  timeout: 5000,
  baseURL: baseURL,
});

//这里是设置发送json格式参数
axios.defaults.headers.post["Content-Type"] = "application/json";

//请求拦截器
request.interceptors.request.use(
  //发送之前想要做些什么
  (config) => {
    // config.headers.Cookie = "110110110110110110";
    return config;
  },
  //方法返回一个带有拒绝原因的 Promise 对象。
  (error) => Promise.reject(error)
);
/**************移除拦截器****************/
// 动态移除
// const me = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(me);
/***************************************/

//响应拦截器（对请求结束后进行一些操作，，例如:统一收集报错）
request.interceptors.response.use(
  //请求成功
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  //请求失败
  (error) => {
    //可根据不同的状态去区分不同的错误，达到不同效果
    // if (error.response.status) {
    console.log(error);
    // }
    return Promise.reject(error);
  }
);

export default request;
