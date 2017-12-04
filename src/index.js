import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import Dashboard from './components/dashboard';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
