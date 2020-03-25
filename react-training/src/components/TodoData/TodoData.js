import React from "react";
import { getData, removeData } from "../../utils/db";

export default class TodoData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler(id) {
    removeData(id);
    getData().then(data => {
      this.setState({
        todoList: data
      });
    });
  }

  render() {
    return this.props.children(this.state.todoList, this.deleteHandler);
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        todoList: data
      });
    });
  }
}
