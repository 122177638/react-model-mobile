import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './footer.less'
class Footer extends Component{
  render(){
    return(
      <footer className="home-footer">
        <div className="footer-wrap">
          <ul className="nav-list">
            <li className="nav-item"><NavLink className="nav-link" exact to="/home">home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/home/user">user</NavLink></li>  
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer