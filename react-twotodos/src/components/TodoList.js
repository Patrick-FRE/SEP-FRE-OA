import React from 'react';
import TodoListEntry from './TodoListEntry';



const TodoList = ({ todoList, removeTodo, type }) => {
  
  
  return  <ul className="todo-list-content">{todoList.map(({ title, id }) => <TodoListEntry type={type}todo={ title } key={ id } id={id} removeTodo={removeTodo} />)}</ul>
}

export default TodoList;