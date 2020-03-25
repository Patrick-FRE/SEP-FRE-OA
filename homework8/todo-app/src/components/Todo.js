import React from "react";

const Todo = ({ content, clickHandler, id }) => {
  return (
    <li className="todo-list-item">
      <p>
        {content}

        <button onClick={() => clickHandler(id)}>delete</button>
      </p>
    </li>
  );
};

export default Todo;
