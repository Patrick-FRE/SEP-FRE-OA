import React from "react";

const Todo = props => {
  return (
    <>
      {props.todoList.map((todo, idx) => (
        <li key={idx}>{todo.content}</li>
      ))}
    </>
  );
};

export default Todo;
