import axios from 'axios'
import qs from 'qs'
import envconfig from '../envconfig/envconfig'
// axios配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = envconfig.baseURL;
// axios.defaults.withCredentials = true 跨域发送cookie

// 发起请求前
axios.interceptors.request.use((config) => {
//   Vue.$vux.loading.show({
//     text: '加载中...'
//   })
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
//   Vue.$vux.toast.show({
//     text: '加载超时',
//     type: 'warn'
//   })
  return Promise.reject(error)
})
// 发起请求后
axios.interceptors.response.use((res) => {
//   Vue.$vux.loading.hide();
  return res
}, (error) => {
  console.log('好多人在访问呀，请重新试试[timeout]')
//   Vue.$vux.loading.hide();
  if (error) {
    let errortime = null
    clearTimeout(errortime)
    errortime = setTimeout(() => {
    //   Vue.$vux.toast.show({
    //     text: '加载失败',
    //     type: 'cancel'
    //   })
      clearTimeout(errortime)
    }, 0)
  }
  return Promise.reject(error)
})

export default class server{
  axios(method, url, params){
    return new Promise((resolve, reject) => {
      if(typeof params !== 'object') params = {};
      let _option = params;
      _option = {
        method,
        url,
        baseURL: envconfig.baseURL,
        timeout: 30000,
        params: null,
        data: null,
        headers: null,
        withCredentials: true, //是否携带cookies发起请求
        validateStatus:(status)=>{
            return status >= 200 && status < 300;
        },
        ...params,
      }
      axios.request(_option).then(res => {
        resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
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
