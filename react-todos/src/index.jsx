import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';

import App from './components/App.jsx';
import styles from './scss/application.scss';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        console.log('Accepting the updated printMe module!');
  });
}