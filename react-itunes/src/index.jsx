import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'regenerator-runtime/runtime';
import styles from './scss/application.scss';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
