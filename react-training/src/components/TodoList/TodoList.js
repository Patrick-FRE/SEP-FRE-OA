import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import { getData } from "../../utils/db";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  render() {
    const list = this.state.todoList
      ? this.state.todoList.map(item => (
          <TodoItem key={item.id} id={item.id} title={item.title}></TodoItem>
        ))
      : null;

    return <ul>{list}</ul>;
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        todoList: data
      });
    });
  }
}
