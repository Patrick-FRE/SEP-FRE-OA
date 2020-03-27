import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter >
    <TodoApp />
  </BrowserRouter>,
  document.getElementById('root')
);
