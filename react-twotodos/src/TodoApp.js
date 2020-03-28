import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Layout from './components/Layout/Layout';
import TodoListEntry from './components/TodoListEntry/TodoListEntry';
import Header from './components/Header/Header';
import ColoredTodoListEntry from './components/ColoredTodoListEntry/ColoredTodoListEntry'
import {Route} from 'react-router-dom';
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
  render() {
    return (
      <Layout header={<Header/>}>
        <main>
          <Route path="/todo" component={Todo} exact />
          <Route path="/coloredtodo" exact>
            <ColoredTodo></ColoredTodo>
          </Route>
          <Route path="/login" component={Login} exact />
        </main>
      </Layout>
    );
  }
}

export default TodoApp