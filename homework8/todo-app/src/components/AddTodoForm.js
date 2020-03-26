import React, { Component } from "react";
import { addTodo } from "../util/todoAPI";

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ inputValue: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
    this.props.setUpTodos();
  }

  render() {
    return (
      <div className="todo-form-container">
        <form className="todo-form" onSubmit={this.submitHandler}>
          {this.props.render(
            "text",
            this.state.inputValue,
            "add todo",
            this.changeHandler
          )}
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
