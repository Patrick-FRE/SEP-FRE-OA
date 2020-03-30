import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import Input from "./components/Input";
import Login from "./components/Login";
import Button from "./components/Button";
import { getTodos, login } from "./util/todoAPI";
// import Route from "./MyRouter/Route";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      showColored: false,
      showLogin: false,
      username: "",
      password: ""
    };
    this.setUpTodos = this.setUpTodos.bind(this);
    this.navbarClickHandler = this.navbarClickHandler.bind(this);
    this.loginChangeHandler = this.loginChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
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

  loginChangeHandler(e) {
    console.log("login");
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault(e);
    console.log(this.state);
    login(this.state.username, this.state.password)
      .then(res => res.json())
      .then(data);
  }

  render() {
    console.log(this.state.username);
    return (
      // <div className="todo-container">
      //   <Header navbarClickHandler={this.navbarClickHandler} />

      //   {this.state.showLogin ? (
      //     <Login
      //       render={() => {
      //         return (
      //           <>
      //             <Input placeholder="username" />
      //             <Input placeholder="password" />
      //             <Button title="login" />
      //           </>
      //         );
      //       }}
      //     />
      //   ) : (
      //     <>
      //       <AddTodoForm
      //         setUpTodos={this.setUpTodos}
      //         render={(type, value, placeholder, changeHandler) => (
      //           <Input
      //             clsName="input-bar"
      //             type={type}
      //             inputValue={value}
      //             changeHandler={changeHandler}
      //             placeholder={placeholder}
      //           />
      //         )}
      //       />
      //       <TodoList
      //         showColored={this.state.showColored}
      //         todoList={this.state.todoList}
      //         setUpTodos={this.setUpTodos}
      //       />
      //     </>
      //   )}
      // </div>
      <>
        <Header navbarClickHandler={this.navbarClickHandler} />
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
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
                  showColored={false}
                  todoList={this.state.todoList}
                  setUpTodos={this.setUpTodos}
                />
              </Route>
              <Route exact path="/todo">
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
                  showColored={false}
                  todoList={this.state.todoList}
                  setUpTodos={this.setUpTodos}
                />
              </Route>
              <Route exact path="/color">
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
                  showColored={true}
                  todoList={this.state.todoList}
                  setUpTodos={this.setUpTodos}
                />
              </Route>
              <Route exact path="/login">
                <Login
                  submitHandler={this.submitHandler}
                  render={() => {
                    return (
                      <>
                        <Input
                          type="text"
                          inputValue={this.state.username}
                          changeHandler={this.loginChangeHandler}
                          name="username"
                          placeholder="username"
                        />
                        <Input
                          type="text"
                          inputValue={this.state.password}
                          changeHandler={this.loginChangeHandler}
                          name="password"
                          placeholder="password"
                        />
                        <Button title="login" />
                      </>
                    );
                  }}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
