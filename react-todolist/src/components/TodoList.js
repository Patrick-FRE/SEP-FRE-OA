import React from 'react';
import TodoListItems from './TodoListItems';

const TodoList = ({todoList, removeTodo}) => {
  const list = todoList.map((todo) => <TodoListItems todo={todo} key={todo.id} id={todo.id} removeTodo={removeTodo}/>);
  return (
    <>
      <ul className="todolist-content">
        {list}
      </ul>
    </>
  );
}


export default TodoList;