import React from 'react';
import {addTodo, removeTodo} from '../../utility/api';
import InputBar from '../InputBar/InputBar';
// import Header from './Header';
import {Link }from 'react-router-dom';

class TodoList extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      todoList: [{id: 1, title: 'Buy A Book'},{id: 2, title: 'Buy A Car'},{id: 3, title: 'Buy A Ball'}],
      id: 4,
    }
    console.log('TodoList')
  }

  addTodoHandler = input => {
    let {id, todoList} = addTodo(input,this.state.todoList, this.state.id);
    this.setState((preState, prop) => {
      return {
        todoList,
        id
      };
    })
  }
  removeTodoHandler = id => {
    let {todoList } = removeTodo(this.state.todoList, id);
    this.setState((preState, prop) => {
      return {
        todoList
      }
    }) 
  }

  render(){
    //return this.props.children(this.state.todoList, this.removeTodoHandler)
  return <>
    <section className="todo-list">
      <header className="todo-list-header">
        <div className="todo-list-header__item">
          <div className="todo-list__title">TODOS</div>
          </div>
          <InputBar addTodoHandler={ this.addTodoHandler }/>
        </header>
    
        {this.props.children(this.state.todoList, this.removeTodoHandler)}
      </section>
  </>;
}
};

export default TodoList;

// const TodoList = ({ todoList, removeTodo, type }) => {
  
  
//   return  <ul className="todo-list-content">{todoList.map(({ title, id }) => <TodoListEntry type={type}todo={ title } key={ id } id={id} removeTodo={removeTodo} />)}</ul>
// }

// export default TodoList;