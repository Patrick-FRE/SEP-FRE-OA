import React, { Component } from "react";
import Todo from "./todo/Todo";
import ColorTodo from "./todo/ColorTodo";
import { getTodos } from "../../util/data";
import { connect } from "react-redux";
import { fetchTodos } from "../../actions/actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // getTodos()
    //   .then(data => data.json())
    //   .then(data => this.setState({ list: data.data }));
    this.props.fetchTodos();
  }
  render() {
    console.log(this.props.todoList);
    let colorTodo = this.props.todoList.map((todo, idx) => (
      <ColorTodo key={idx} todo={todo.content} />
    ));
    return (
      <ul>
        {this.props.showColor ? (
          colorTodo
        ) : (
          <Todo todoList={this.props.todoList} />
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
