import React from 'react';
import { getRandomColor } from '../../util/getRandomColor';
import TodoList from '../TodoList/TodoList';
import './ColoredText.css';

export default class ColoredText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomColor()
    };
  }

  componentDidMount() {
    this.actionTime = setInterval(() => {
      this.setState({ color: getRandomColor() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.actionTime) clearInterval(this.actionTime);
  }
  render() {
    const { text } = this.props;
    return (
      <span className="colored-item" style={{color: getRandomColor()}}>{text}</span>
    );
  }
};

const ColoredTodoItem = ({id, title, onClick}) => {
  return (
    <li id={id}>
      {title.split(' ').map((text, idx) => {
        if (idx !== title.split(' ').length - 1) {
          return <ColoredText text={text + ' '} />;
        } else {
          return <ColoredText text={text} />;
        } 
      })}
      <button onClick={() => onClick(id)}>Delete</button>
    </li>
  );
};

export const Colored = () => (
    <TodoList>
    {(todolist, remove) => {
      return todolist.map(({id, title}) => (
        <ColoredTodoItem
          id={id}
          title={title}
          onClick={remove}
        />
      ));
    }}
    </TodoList>
);