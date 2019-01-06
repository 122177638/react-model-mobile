import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter  } from 'react-router-dom';

import Home from './home/home'
import Login from './login/login'


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
