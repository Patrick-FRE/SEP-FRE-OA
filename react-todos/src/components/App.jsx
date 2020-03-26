import React, { Fragment, useState } from 'react';
import Header from './Header';
import TodosContainer from './TodosContainer';
//import variables from '../scss/_variables.scss'
import LoginPage from './Login';
//import { Route, Switch, Link } from 'react-router-dom';
import Layout from './Layout';


const App = () => {
  //const [todos, setTodo] = useState([]);
  // const [login, setLogin] = useState('Sign Out')

  // const togglePage = (e) => {
  //   e.preventDefault();
  //   if (login==='Sign Out') {
  //     setLogin('Login');
  //   }
  //   else {
  //     setLogin('Sign Out')
  //   }
  // }
  return (
    <Fragment>
      <Layout>
      </Layout>
        {/* <Header todos = {todos}>
          <button onClick = {(e) => {togglePage(e)}} className = 'btn clear-btn'><Link to="/todos">Login</Link></button>
        </Header>{/*
        {login==='Sign Out' && <TodosContainer setTodo = {setTodo} todos = {todos}/>}
        {login==='Login' && <LoginPage togglePage = {togglePage}/>}
            <Switch>
                <Route path="/todos" component={TodosContainer} exact />
                <Route path="/login" component={LoginPage} />
            </Switch> */}
    </Fragment>
  )
}

export default App;
