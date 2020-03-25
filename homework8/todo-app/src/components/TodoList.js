import React, { Component } from "react";
import Todo from "./Todo";
import { removeTodo } from "../util/todoAPI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id) {
    removeTodo(id);
    this.props.setUpTodos();
  }

  componentDidMount() {
    this.props.setUpTodos();
  }

  render() {
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          {this.props.todoList &&
            this.props.todoList.map(todo => (
              <Todo
                key={todo.id}
                id={todo.id}
                content={todo.content}
                clickHandler={this.clickHandler}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
