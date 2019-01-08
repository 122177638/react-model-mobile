import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './loading.less'

class Loading extends Component{
  state = {
    loadShow: false
  }
  open(){
    this.setState({
      loadShow: true
    })
  }
  render(){
    return(
      <div className={`loadding ${this.state.loadShow?'Show':'Hide'}`}>
        <div className="spinner">
          <div className="spinner-container container1">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
          <div className="spinner-container container2">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
          <div className="spinner-container container3">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
          <div className="Tip">加载中...</div>
        </div>
      </div>
    )
  }
}
let loadBox = document.createElement('div');
loadBox.className = 'loading-container';
let props = {

}
document.body.appendChild(loadBox);
let loadDom = ReactDOM.render(
  React.createElement(
    Loading,
    props
  ),
  loadBox,
)
export default loadDom