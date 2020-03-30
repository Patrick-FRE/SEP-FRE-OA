import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';


const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <TodoApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
