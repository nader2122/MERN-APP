import React from 'react';
import{ Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './JS/store/store'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

