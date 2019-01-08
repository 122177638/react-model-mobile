import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter  } from 'react-router-dom';
import asyncComponent from '@/common/js/asyncComponent'

import Home from './home/home'
// 页面按需加载
const Login = asyncComponent(() => import('./login/login'))
// react-router-dom4 不再推荐将所有路由规则放在同一个地方集中式路由
// 子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染,APP就是祖先组件。
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/login" component={Login}></Route>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
