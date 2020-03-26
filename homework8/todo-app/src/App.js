import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import Input from "./components/Input";
import Login from "./components/Login";
import Button from "./components/Button";
import { getTodos } from "./util/todoAPI";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [], showColored: false, showLogin: false };
    this.setUpTodos = this.setUpTodos.bind(this);
    this.navbarClickHandler = this.navbarClickHandler.bind(this);
  }

  setUpTodos() {
    getTodos()
      .then(res => res.json())
      .then(data => this.setState({ todoList: data.data }));
  }

  navbarClickHandler(index) {
    console.log(index);
    if (index === 1) {
      this.setState({ showColored: true, showLogin: false });
    } else if (index === 0) {
      this.setState({ showColored: false, showLogin: false });
    } else {
      this.setState({ showLogin: true });
    }
  }

  render() {
    console.log(this.state.showLogin);
    return (
      <div className="todo-container">
        <Header navbarClickHandler={this.navbarClickHandler} />

        {this.state.showLogin ? (
          <Login
            render={() => {
              return (
                <>
                  <Input placeholder="username" />
                  <Input placeholder="password" />
                  <Button title="login" />
                </>
              );
            }}
          />
        ) : (
          <>
            <AddTodoForm
              setUpTodos={this.setUpTodos}
              render={(type, value, placeholder, changeHandler) => (
                <Input
                  clsName="input-bar"
                  type={type}
                  inputValue={value}
                  changeHandler={changeHandler}
                  placeholder={placeholder}
                />
              )}
            />
            <TodoList
              showColored={this.state.showColored}
              todoList={this.state.todoList}
              setUpTodos={this.setUpTodos}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
