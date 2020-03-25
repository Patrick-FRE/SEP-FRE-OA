import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { getTodos } from "./util/todoAPI";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
    this.setUpTodos = this.setUpTodos.bind(this);
  }

  setUpTodos() {
    getTodos()
      .then(res => res.json())
      .then(data => this.setState({ todoList: data.data }));
  }

  render() {
    return (
      <div>
        <AddTodoForm setUpTodos={this.setUpTodos} />
        <TodoList todoList={this.state.todoList} setUpTodos={this.setUpTodos} />
      </div>
    );
  }
}

export default App;
