import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import { Todo } from './components/TodoList';
import { Colored } from './components/ColoredText';
import Login from './components/Login';

// const Todo = () => {
//   return <span>Todo</span>;
// };
// const Colored = () => {
//   return <span>Colored</span>;
// };
// const Login = () => {

//   return <span>Login</span>;
// ....};


export default class App extends React.Component {
  render() {
    return (
      <Layout header={<Header />}>
        <Route exact path='/todo' component={Todo} />
        <Route exact path='/colored' component={Colored} />
        <Route exact path='/login' component={Login} />
      </Layout>
    );
  }
};

