import React from 'react';
import InputBar from './InputBar';
import TodoList from './TodoList';

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      todoList: [],
      id: 1
    }
    console.log('App: constructor')
  }

  addTodo = newTodo => {
    console.log('App, addTodo')
    console.log('App, addTodo', newTodo);

    this.setState((preState, prop) => {
      return {
        todo: {title: newTodo, id: preState.id},
        id: preState.id + 1
      };
    })

    this.setState((preState, prop) => {
      return {
        todoList: [...preState.todoList, preState.todo]
      }
    })

    console.log(this.state.todoList)
    
  }

  removeTodo = id => {
    console.log('remove todo', id)
    this.setState((preState, prop) => {
      return {
        todoList: preState.todoList.filter(todo => todo.id !== id)
      }
    })
  }

  render(){
    console.log('App: render')
    return(
      <>
        <header className="todos-header primary">
          <span className="logo">Todos</span>
        </header>
        <main className="todos-content">
          <section className="todo-list">
            <header className="todo-list-header">
              <InputBar addTodo={ this.addTodo }/>
            </header>
            <TodoList todoList={ this.state.todoList } removeTodo={ this.removeTodo }/>
          </section>
        </main>  
      </>
  
    );
  };
};

export default App;