
import * as types from './action-type';
import API from './../api/api'

export const getData = (params)=>{
  return async dispatch => {
    try{
      let result = await API.uploadImg(params);
      dispatch({
        type: types.GETTODOLIST,
        dataList: result,
      })
    }catch(err){
      console.error(err);
    }
  }
}