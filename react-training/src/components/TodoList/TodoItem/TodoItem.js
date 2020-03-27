import React from "react";

const TodoItem = props => (
  <li id={props.id}>
    {props.title}{" "}
    <button
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      Remove
    </button>
  </li>
);
export default TodoItem;
