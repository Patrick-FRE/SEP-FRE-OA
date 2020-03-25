import React from 'react';
import Header from './Header'
import InputBar from './InputBar';
import TodoList from './TodoList';
import TodoListEntry from './TodoListEntry';


class App extends React.Component {
  // state = {
  //   newTodo: ''
  // }
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todoList: []
    }
    console.log('App: constructor')
  }

  addTodo = newTodo => {
    console.log('App, addTodo')
    console.log('App, addTodo', newTodo);

    this.setState((preState, prop) => {
      return {
        todoList: [...this.state.todoList, newTodo]
      }
    })

    console.log(this.state.todoList)
    
  }

  render(){
    console.log('App: render')
    return(
      <div>
        <Header />
        <InputBar addTodo={ this.addTodo }/>
        <TodoList todoList={ this.state.todoList }/>
        <TodoListEntry />
      </div>
  
    );
  };
};

export default App;