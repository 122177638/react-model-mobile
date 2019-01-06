import React,{Component} from 'react';
import './home.less'

import { Route  } from 'react-router-dom';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Index from './subPages/index/index'
import user from './subPages/user/user'
class Home extends Component{
  render(){
    return(
      <div className="home-container">
        <Header></Header>
        <main className="home-content">
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/user" component={user}></Route>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home