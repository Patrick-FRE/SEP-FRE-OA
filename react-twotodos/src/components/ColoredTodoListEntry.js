import React from "react";
import ColoredText from "./ColoredText";

const ColoredTodoListEntry = props => (
  <li id={props.id} style={{listStyleType:'none'}}>
      {console.log(typeof props.todo)}
    {props.todo.split(" ").map((word, index) => {
      if (index !== props.todo.split(" ").length - 1) {
        return <ColoredText key={index} text={word + " "} />;
      }
      return <ColoredText key={index} text={word} />;
    })}
    <button
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      Remove
    </button>
  </li>
);
export default ColoredTodoListEntry;