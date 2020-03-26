import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import TodoData from "./components/TodoData/TodoData";
import TodoItem from "./components/TodoList/TodoItem/TodoItem";
import ColoerdTodoItem from "./components/ColoredTodoItem/ColoredTodoItem";
import { Route } from "react-router-dom";

const Todo = () => (
  <TodoData>
    {(todoList, deleteHandler) => {
      return todoList.map(todo => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          onClick={deleteHandler}
        ></TodoItem>
      ));
    }}
  </TodoData>
);

const ColoredTodo = () => (
  <TodoData>
    {(todoList, deleteHandler) => {
      console.log("test");
      return todoList.map(todo => (
        <ColoerdTodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          onClick={deleteHandler}
        ></ColoerdTodoItem>
      ));
    }}
  </TodoData>
);

const Login = () => {
  return <h1>Login</h1>;
};

const Home = () => {
  //console.log(location.pathname);
  return <h1>HOME</h1>;
};

export default class TodoApp extends React.Component {
  render() {
    return (
      <Layout header={<Header></Header>}>
        <main>
          <Route path="/" component={Home} exact />
          <Route path="/todo" component={Todo} exact />
          <Route path="/coloredtodo" component={ColoredTodo} exact />
          <Route path="/login" component={Login} exact />
        </main>
      </Layout>
    );
  }
}
