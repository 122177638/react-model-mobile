import axios from './axios';

class Api extends axios{
    async uploadImg(params = {}){
        try{
          let result = await this.axios('post', '/Home/Humanjb/imgSave', params); 
          if(result && result.status === 1){
            return result;
          }else{
            let err = {
              tip: '上传图片失败',
              response: result,
              data: params,
              url: '/Home/Humanjb/imgSave',
            }
            throw err;
          }
        }catch(err){
          throw err;
        }
    }
}

export default new Api()