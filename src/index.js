import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

document.addEventListener("DOMContentLoaded", () =>{
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
