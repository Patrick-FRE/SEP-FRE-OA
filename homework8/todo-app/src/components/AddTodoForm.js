import React, { Component } from "react";
import { addTodo } from "../util/todoAPI";

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ todo: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    addTodo(this.state.todo);
    this.setState({ todo: "" });
    this.props.setUpTodos();
  }

  render() {
    return (
      <div className="todo-form-container">
        <form className="todo-form" onSubmit={this.submitHandler}>
          <input
            className="input-bar"
            type="text"
            value={this.state.todo}
            onChange={this.changeHandler}
            placeholder="add todo ..."
          />
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
