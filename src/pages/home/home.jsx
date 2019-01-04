import React,{Component} from 'react';
import './home.less'
import logo from './../logo.svg';
import { Link } from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div className="Home-container">
        <div className="Home-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Welcome to use create-react-app
          <br />
          subitem：react-model-mobile
          <br />
          author：Anles
          </p>
          <Link to="/user">前往user组件</Link>
        </div>
      </div>
    )
  }
}

export default Home