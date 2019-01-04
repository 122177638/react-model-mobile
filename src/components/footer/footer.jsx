import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.less'
class Footer extends Component{
  render(){
    return(
      <footer className="App-footer">
        <div className="footer-wrap">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">home</Link></li>
            <li className="nav-item"><Link to="/user">user</Link></li>  
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer