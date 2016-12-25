import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import App from './components/App';

const myStore = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={myStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
