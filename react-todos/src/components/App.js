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
      newTodo: ''
    }
    console.log('App: constructor')
  }

  addTodo = newTodo => {
    console.log('App, addTodo')
    console.log('App, addTodo', newTodo);
  }

  render(){
    console.log('App: render')
    return(
      <div>
        <Header />
        <InputBar addTodo={ this.addTodo }/>
        <TodoList />
        <TodoListEntry />
      </div>
  
    );
  };
};

export default App;