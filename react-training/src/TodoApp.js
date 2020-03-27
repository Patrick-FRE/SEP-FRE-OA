import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import TodoData from "./components/TodoData/TodoData";
import TodoItem from "./components/TodoList/TodoItem/TodoItem";
import ColoerdTodoItem from "./components/ColoredTodoItem/ColoredTodoItem";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import { Test } from "./components/Login/Login";
import { isAuthenticated } from "./utils/authAPI";

//import { Route, RouteInstance } from "./MyRouter/Route";
const Todo = () => (
  <TodoData>
    {(todoList, deleteHandler) => {
      return todoList.map(todo => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          onClick={deleteHandler}
        ></TodoItem>
      ));
    }}
  </TodoData>
);

const ColoredTodo = () => (
  <TodoData>
    {(todoList, deleteHandler) => {
      console.log("test");
      return todoList.map(todo => (
        <ColoerdTodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          onClick={deleteHandler}
        ></ColoerdTodoItem>
      ));
    }}
  </TodoData>
);

// const Login = () => {
//   console.log(window.location.pathname);
//   return (
//     <h1
//       onClick={() => {
//         window.history.pushState({}, "", "/test");
//       }}
//     >
//       Login
//     </h1>
//   );
// };

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const Home = () => {
  console.log(window.location.pathname);
  return <h1>HOME</h1>;
};

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  updateUserInfo(newUser) {
    this.setState({
      user: newUser
    });
  }

  render() {
    console.log("newUser", this.state);
    return (
      <Layout header={<Header></Header>}>
        <main>
          <Route path="/todo" component={Test} name="patrick" exact />
          <PrivateRoute path="/coloredtodo">
            <ColoredTodo></ColoredTodo>
          </PrivateRoute>
          {/* <Route
            path="/coloredtodo"
            exact
            render={() => {
              if (this.state.user) {
                return <ColoredTodo></ColoredTodo>;
              }
              return <Redirect to="/login"></Redirect>;
            }}
          ></Route> */}
          <Route
            path="/login"
            render={props => {
              return (
                <Login updateUserInfo={this.updateUserInfo} {...props}></Login>
              );
            }}
            exact
          />
        </main>
      </Layout>
    );
  }
}

function sum(a, b, callbackFn) {
  let sum = a + b;
  callbackFn(sum);
}
