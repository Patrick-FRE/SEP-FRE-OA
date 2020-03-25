import React from 'react';

const TodoListItems = ({todo, removeTodo}) => {
// when doing removeTodo(todo.id), error pops out
// Cannot update during an existing state transition(such as within `render`).Render methods should be a pure
// function of props and state
  return (
      <li className="todolist-items">
        {todo.input}
        <button onClick={() => removeTodo(todo.id)} className="btn btn-delete">X</button>
      </li>
  );
};

export default TodoListItems;
