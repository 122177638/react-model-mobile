import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect  } from 'react-router-dom';
// import asyncComponent from '@/utils/asyncComponent';

// const mrResult = asyncComponent(() => import("@/pages/mrResult/mrResult"));
import App from "../pages/App";
import User from "../pages/user/user";


export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App}></Route>
          {/* <Route path="/user" component={User}></Route> */}
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}