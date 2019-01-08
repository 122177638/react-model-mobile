import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Route  } from 'react-router-dom';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Index from './subPages/index/index'
import user from './subPages/user/user'
import { openScroll } from '@/common/js/mixin'
import './home.less'


class Home extends Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentDidMount(){
    openScroll(this.refs.viewDom)
  }
  
  render(){
    return(
      <div className="home-container">
        <Header></Header>
        <main className="home-content" ref="viewDom">
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/user" component={user}></Route>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home