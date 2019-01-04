import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/base.css';
import './common/js/rem.js'
import App from './pages/App';
// import router from './router/index';
import * as serviceWorker from './serviceWorker';

// const render = Component => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  )
// }
// render(router)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
