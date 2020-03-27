import React from 'react';
import App from './App.js';
import Header from './Header';
//import TodoList from './TodoList';
//import Route from './Route.js';
import { Route, Link } from 'react-router-dom';


const TodoApp = () => {


    return (
        <>
       
          <Link to="/header" classname="header">Header</Link>
   

        <Route path="/app" exact component={ App }/>
        <Route path="/header" exact component={ Header }/>
        
      </>
    )
}

export default TodoApp