import React, { Component } from "react";
import ColorWord from "../../coloredWord/ColorWord";

class ColorTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <li>
          {this.props.todo.split(" ").map((todo, idx) => (
            <ColorWord key={idx} word={todo + " "} />
          ))}
        </li>
      </>
    );
  }
}

export default ColorTodo;
