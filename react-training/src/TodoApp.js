import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import TodoData from "./components/TodoData/TodoData";
import TodoItem from "./components/TodoList/TodoItem/TodoItem";

export default class TodoApp extends React.Component {
  render() {
    return (
      <Layout header={<Header></Header>}>
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
      </Layout>
    );
  }
}
