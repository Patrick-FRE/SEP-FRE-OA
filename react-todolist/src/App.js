import React from 'react';
import TodoList from './components/TodoList';
import InputBar from './components/InputBar';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [],
      input: '',
      id: 1
    };
  }
  addTodo = e => {
    const todo = {input: e, id: this.state.id++};
    this.state.todoList.push(todo);
    this.setState({todoList: this.state.todoList});
  }
  removeTodo = id => {
    const itemsLeftOver = this.state.todoList.filter(item => item.id !== id);
    this.setState({todoList: itemsLeftOver});
  } 
  render() {
    return (
      <div className="App">
        <header className="todos-header primary">
          <span className="logo">Todos</span>
        </header>
        <main className="todos-content">
          <section className="todolist">
            <header className="todolist-header">
              <div className="todo-list-header__item">
                <div className="todo-list-title primary">TODOS</div>
              </div>
              <div className="todo-list-header__item">
                <InputBar addTodo={this.addTodo} />
              </div>
            </header>
            <TodoList todoList={this.state.todoList} removeTodo={this.removeTodo}/>
          </section>
        </main>
      </div>
    );
  }
}


export default App;
