import React,{Component} from 'react';
import { HashRouter, Switch, Route, Redirect, Link  } from 'react-router-dom';

import './myAssets.less'



class MyAssets extends Component{
  render(){
    return(
      <div className="myAssets-container">
        我是myAssets组件
      </div>
    )
  }
}

export default MyAssets