import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Layout from './components/Layout/Layout';
import TodoListEntry from './components/TodoListEntry/TodoListEntry';
import Header from './components/Header/Header';
import ColoredTodoListEntry from './components/ColoredTodoListEntry/ColoredTodoListEntry'
import {Route, Redirect, withRouter} from 'react-router-dom';
import Login from './components/Login/Login';
import './index.css';

const Todo = () => {
  return (
    <TodoList>
      {(todoList, removeTodo) => {
          return todoList.map(({ title, id }) => {
            return  <TodoListEntry todo={ title } key={ id } id={id} onClick={removeTodo} />
          })
        }
      }
    </TodoList>
  )
}

const ColoredTodo = () => {
  return (
    <TodoList>
      {(todoList, removeTodo) => {
          return todoList.map(({ title, id }) => {
            return  <ColoredTodoListEntry todo={ title } key={ id } id={id} onClick={removeTodo} />
          })
        }
      }
    </TodoList>
  )
}


class TodoApp extends React.Component {
  state = {
    loggedIn: false
  }

  isUserLoggedIn = (isLogin) => {
   
    this.setState({ loggedIn: isLogin})
    if(this.state.loggedIn === true) {
      this.props.history.push('/coloredtodo')
    }
    console.log('login', this.state.loggedIn)
  }
  render() {
    console.log(this.props)
    return (
      <Layout header={<Header/>}>
        <main>
          <Route path="/" component={Todo} exact />
          <Route path="/todo" component={Todo} exact />
          <Route path="/coloredtodo" exact render={
            (location) => (
             this.state.loggedIn? <ColoredTodo /> : <Redirect to={{pathname:'/login', from:location}} />
            )
          }>   
           </Route>
          <Route path="/login" component={() => <Login isUserLoggedIn = {this.isUserLoggedIn}/>} exact />
        </main>
      </Layout>
    );
  }
}

export default withRouter(TodoApp);