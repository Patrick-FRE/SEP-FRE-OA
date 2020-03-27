import React from 'react';
import TodoListEntry from './TodoListEntry';



const TodoList = ({ todoList, removeTodo }) => {
  
  console.log( 'TodoList', todoList )
  return  <ul className="todo-list-content">{todoList.map(({ title, id }) => <TodoListEntry todo={ title } key={ id } id={id} removeTodo={removeTodo} />)}</ul>
}

export default TodoList;