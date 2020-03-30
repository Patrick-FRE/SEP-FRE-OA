import React, { Component } from "react";

import { connect } from "react-redux";
import { changeTodo, addNewTodo, fetchTodos } from "../../actions/actions";

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    // this.state = { todo: "" };
    // this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  // changeHandler(event) {
  //   this.setState({ todo: event.target.value });
  // }

  submitHandler(event) {
    event.preventDefault();
    this.props.addNewTodo(this.props.todo);
    this.props.fetchTodos();
    // this.setState({ todo: "" });
  }

  render() {
    return (
      <div className="todo-form-container">
        <form className="todo-form" onSubmit={this.submitHandler}>
          <input
            value={this.props.todo}
            name="todo"
            placeholder="add todo..."
            onChange={this.props.changeTodo}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(mapStateToProps, { changeTodo, addNewTodo, fetchTodos })(
  AddTodoForm
);
