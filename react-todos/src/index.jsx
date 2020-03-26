import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';
import styles from './scss/application.scss';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.querySelector('#root')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        console.log('Accepting the updated printMe module!');
  });
}