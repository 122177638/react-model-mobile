import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect, Link  } from 'react-router-dom';

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Home from './home/home'
import User from './user/user'
import './App.less';



class App extends Component {
  constructor(props){
    super(props)
    console.log(props == this.props)
  }
  componentDidMount(){
    console.log(this.props.match)
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header></Header>
          <main className="App-content">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/user" component={User}></Route>
            </Switch>
          </main>
          <Footer></Footer>
        </div>
    </HashRouter>
    );
  }
}

export default App;
