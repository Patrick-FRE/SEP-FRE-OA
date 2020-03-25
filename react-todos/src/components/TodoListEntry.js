import React from 'react';


const TodoListEntry = ({ removeTodo, todo, id}) => {
  const onRemoveClick = () => {
    removeTodo(id)
  }
 
  return(
    <li className="todo-list-content__item" >{ todo } 
      <button onClick={ onRemoveClick }id={ id } className="btn btn-remove"  >Remove </button>
    </li>

  )
}

export default TodoListEntry;