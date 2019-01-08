import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import * as serviceWorker from '@/serviceWorker'
import App from '@/pages/App';
import store from '@/store/store';
import '@/common/style/base.css';
import '@/common/js/rem.js'

// 监听state变化
store.subscribe((ss) => {
  console.log('store发生了变化');
});

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}
render(App)
// 开启局部热加载
if (module.hot) {
  module.hot.accept('./pages/App',()=>{
    render(App)
  })
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
