import React, { Component } from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import TodoList from "./components/todolist/TodoList";
import AddTodoForm from "./components/addTodoForm/AddTodoForm";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Layout header={<Header />}>
            <main>
              <Switch>
                <Route exact path="/">
                  <AddTodoForm />
                  <TodoList />
                </Route>
                <Route exact path="/color">
                  <AddTodoForm />
                  <TodoList showColor={true} />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
              </Switch>
            </main>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
