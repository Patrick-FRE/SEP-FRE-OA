import React from 'react';
import { getTodos, removeData } from '../../util/todoAPI';

export const TodoListItem = ({id, title, remove}) => {
  return (
    <li className="todolist-item" id={id}>
      {title}
      <button onClick={() => remove(id)}>Delete</button>
    </li>
  );
};

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    getTodos().then(data => this.setState({todoList: data}));
  }
  remove(id) {
    removeData(id);
    getTodos().then(data => this.setState({todoList: data}));
  }
  render() {
    return this.props.children(this.state.todoList, this.remove);
  }
};

export const Todo = () => (
    <TodoList>{(todoList, remove) => {
      return todoList.map(({id, title}) => (
        <TodoListItem
          id={id}
          title={title}
          onClick={remove}
        />
      ));
    }}</TodoList>
);
