import React,{Component} from 'react';
import { Link  } from 'react-router-dom';

import './user.less'



class User extends Component{

  render(){
    return(
      <div className="myAssets-container">
        我是user组件
        <br />
        <Link to="/login">前往登录页</Link>
      </div>
    )
  }
}

export default User