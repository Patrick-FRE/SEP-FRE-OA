import React from "react";
import ColoredText from "../ColoredText/ColoredText";

const ColoerdTodoItem = props => (
  <li id={props.id}>
    {props.title.split(" ").map((word, index) => {
      if (index !== props.title.split(" ").length - 1) {
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
export default ColoerdTodoItem;
