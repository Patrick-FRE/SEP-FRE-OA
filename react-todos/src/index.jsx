import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import styles from './scss/application.scss';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    console.log('Accepting the updated printMe module!');
  });
}