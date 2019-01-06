import React,{Component} from 'react';
import './index.less'
import logo from './../../../logo.svg';
// import API from '../../../../api/api'

class Index extends Component{
  componentDidMount(){
    // API.uploadImg()
  }
  render(){
    // console.log(CSSModules)
    return(
      <div className="myAssets-container">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to use create-react-app
        <br />
        subitem：react-model-mobile
        <br />
        author：Anles
        </p>
      </div>
    )
  }
}

export default Index