import axios from 'axios';
import qs from 'qs';
import envconfig from '../envconfig/envconfig';
import { Toast } from 'antd-mobile' ;

// 发起请求前
axios.interceptors.request.use((config) => {
  Toast.loading('Loading...', 0)
  if (config.method.toUpperCase() === 'POST') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, (error) => {
  Toast.offline('请求超时', 3)
  return Promise.reject(error)
})
// 发起请求后
axios.interceptors.response.use((res) => {
  Toast.hide();
  return res;
}, (error) => {
  console.log('好多人在访问呀，请重新试试')
  if (error) {
    Toast.fail('请求失败,请重试', 3)
  }
  return Promise.reject(error)
})

export default class Axios{
  axios(method, url, params,config){
    return new Promise((resolve, reject) => {
      if(typeof params !== 'object') params = {};
      let _option = Object.assign({
        method,
        url,
        baseURL: envconfig.baseURL,
        timeout: 30000,
        headers: null,
        // withCredentials: true, //是否携带cookies发起请求  
      },config)
      method.toUpperCase() === 'POST'? _option.data =  params : _option.params = params;
      axios.request(_option).then(res => {
        resolve(res.data)
      },error => {
        if(error.response){
            reject(error.response.data)
        }else{
            reject(error)
        }
      })
    })
  }
}
