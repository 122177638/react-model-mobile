import * as types from './action-type';

let defaultState = {
  dataList: {}
}

export const gettodolist = (state = defaultState, action)=>{
  switch(action.type){
    case types.GETTODOLIST:
    return {...state,...{dataList:action.dataList}};
    default:
    return state;
  }
}