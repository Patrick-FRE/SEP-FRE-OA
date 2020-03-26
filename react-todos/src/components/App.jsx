import React, { Fragment, useState } from 'react';
import Header from './Header';
import TodosContainer from './TodosContainer';
//import variables from '../scss/_variables.scss'
import LoginPage from './Login';


const App = () => {
  const [todos, setTodo] = useState([]);
  const [login, setLogin] = useState('Sign Out')

  const togglePage = (e) => {
    e.preventDefault();
    if (login==='Sign Out') {
      setLogin('Login');
    }
    else {
      setLogin('Sign Out')
    }
  }
  return (
    <Fragment>
        <Header todos = {todos} login = {login}>
          <button onClick = {(e) => {togglePage(e)}}className = 'btn clear-btn'>{login}</button>
        </Header>
        {login==='Sign Out' && <TodosContainer setTodo = {setTodo} todos = {todos}/>}
        {login==='Login' && <LoginPage/>}
    </Fragment>
  )
}

export default App;
