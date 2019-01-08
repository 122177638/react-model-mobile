import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.less'
import logo from '@/pages/logo.svg';
import { getData } from '@/store/action'

class Index extends Component{
  componentWillMount(){
    this.props.getData({username:'Anles',birthday:'0-1993-11-11-10',gender:1});
  }
  render(){
    const dataList = this.props.gettodolist.dataList;
    console.log(dataList)
    return(
      <div className="myAssets-container">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to use create-react-app
        <br />
        subitem：react-model-mobile
        <br />
        author：{dataList.username}
        <br />
        </p>
        <p>优点：{dataList.youdian}</p>
        <p>缺点：{dataList.quedian}</p>
        <p>分析：{dataList.text}</p>
        <style>
          {`
          p{padding:0 30px;}
          `}
        </style>
      </div>
    )
  }
}

export default connect(state => ({
  gettodolist: state.gettodolist,
}), {
  getData
})(Index)