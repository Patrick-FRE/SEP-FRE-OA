import React from 'react';
import InputBar from './InputBar';
import TodoList from './TodoList';
import Header from './Header';
import {Link }from 'react-router-dom';


class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      todoList: [{id: 1, title: 'Buy A Book'},{id: 2, title: 'Buy A Car'},{id: 3, title: 'Buy A Ball'}],
      id: 4,
      type: 'regular'
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

  getType = (type) => {
    this.setState({
      type
    })

    console.log(this.state.type)
  }

  render(){
    console.log('App: render')
    return(
      <>
        <Header todos={this.state.todoList} getType={this.getType}/>
        
        <main className="todos-content">
          <section className="todo-list">
            <header className="todo-list-header">
              <div className="todo-list-header__item">
                <div className="todo-list__title">TODOS</div>
              </div>
              <InputBar addTodo={ this.addTodo }/>
            </header>
            <TodoList type={this.state.type} todoList={ this.state.todoList } removeTodo={ this.removeTodo }/>
          </section>
        </main>  
        <Link to="/header" classname="header">Header</Link>
       
      </>


  
    );
  };
};

export default App;