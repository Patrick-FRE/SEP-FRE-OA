import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import { Todo } from './components/TodoList/TodoList';
import { Colored } from './components/ColoredTodoList/ColoredText';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <Layout header={<Header />}>
      <main>
        <Route exact path='/todo' component={Todo}/>
        <Route exact path='/colored' component={Colored}/>
        <Route exact path='/login' component={Login}/>
      </main>
      </Layout>
    </div>
  );
}

export default App;
