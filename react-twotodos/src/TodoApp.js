import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Layout from './components/Layout/Layout';
import TodoListEntry from './components/TodoListEntry/TodoListEntry';
import Header from './components/Header/Header';
import ColoredTodoListEntry from './components/ColoredTodoListEntry/ColoredTodoListEntry'
import {Route, Redirect, withRouter} from 'react-router-dom';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { logIn } from '../src/actions';
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
 
  isUserLoggedIn = (isLoggedIn) => {
    if(isLoggedIn) {
      this.props.logIn(true);
      this.props.history.push('/coloredtodo')
    } else {
      this.props.logIn(false);
    }
  }
  render() {
    
    console.log('TodoApp', this.props.isLoggedIn)
    return (
      <Layout header={<Header/>}>
        <main>
          <Route path="/" component={Todo} exact />
          <Route path="/todo" component={Todo} exact />
          <Route path="/coloredtodo" exact render={
            (location) => (
             this.props.isLoggedIn? <ColoredTodo /> : <Redirect to={{pathname:'/login', from:location}} />
            )
          }>   
           </Route>
          <Route path="/login" component={() => <Login isUserLoggedIn = {this.isUserLoggedIn}/>} exact />
        </main>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {isLoggedIn: state.auth.isLoggedIn}
}

export default connect(mapStateToProps, { logIn })(withRouter(TodoApp));

