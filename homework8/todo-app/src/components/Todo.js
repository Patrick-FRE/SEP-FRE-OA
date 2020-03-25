import React from "react";

const Todo = ({ content, clickHandler, id }) => {
  return (
    <li>
      {content}
      <button onClick={() => clickHandler(id)}>delete</button>
    </li>
  );
};

export default Todo;
