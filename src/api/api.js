import Axios from './axios';

class Api extends Axios{
    async uploadImg(params = {}){
        try{
          let result = await this.axios('get', '/Home-InterfaceMr-characterZW', params); 
          if(result){
            return result;
          }else{
            let err = {
              tip: '获取信息失败',
              response: result,
              data: params,
              url: '/Home-InterfaceMr-characterZW',
            }
            throw err;
          }
        }catch(err){
          throw err;
        }
    }
}

export default new Api()