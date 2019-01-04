import React,{Component} from 'react';
import { HashRouter, Switch, Route, Redirect, Link  } from 'react-router-dom';

import MyAssets from './subPages/myAssets/myAssets'
import './user.less'



class User extends Component{
  render(){
    return(
      <div className="user-cntainer">
        我是User组件
        <Link to="/user/myAssets">打开myAssets</Link>
        <Route path="/user/myAssets" component={MyAssets}></Route>
      </div>
    )
  }
}

export default User