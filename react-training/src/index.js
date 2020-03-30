import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./TodoApp";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// core concept:
// one store / pure function / data imutable
// Store / Reducer / Action / ActionCreator / Action Type / combineReducer / dispatch / applyMiddleware / subscribe

// Action type
const ADDONETODO = "ADDONETODO";
const REMOVETODO = "REMOVETODO";

const ActionType = {
  ADDONETODO,
  REMOVETODO
};

// Action Creator
const addtodo = newTodo => {
  return { type: ActionType.ADDONETODO, payload: { newTodo } };
};
const delayRemove = id => {
  return function(dispatch) {
    setTimeout(() => {
      console.log(id);
      console.log(dispatch);
      dispatch(ActionCreator.removeTodo(id));
    }, 1000);
  };
};

const removeTodo = id => {
  return { type: ActionType.REMOVETODO, payload: { id } };
};
const ActionCreator = {
  addtodo,
  removeTodo,
  delayRemove
};

// Reducer
const todoReducer = (state = { todoList: [] }, action) => {
  switch (action.type) {
    case ActionType.ADDONETODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload.newTodo]
      };
      break;
    case ActionType.REMOVETODO:
      console.log("remove");
      return {
        ...state,
        todoList: state.todoList.filter(todo => {
          return todo.id !== action.payload.id;
        })
      };
      break;
    default:
      return state;
      break;
  }
};

let obj = {
  type: ActionType.ADDONETODO,
  payload: { newTodo: { id: 1, message: "Hello 1" } }
};

// class ObjA {
//   constructor(type) {
//     this.type = type;
//   }
// }
// console.log(obj);

// let objA = new ObjA("test");
// console.log(objA);

const store = createStore(todoReducer, applyMiddleware(thunk));

console.log(store);
console.log(store.getState());
store.dispatch(obj);
console.log(store.getState());
store.subscribe(() => {
  console.log("hello subscribe");
});
store.dispatch(ActionCreator.addtodo({ id: 2, message: "Hello 2" }));
store.dispatch(ActionCreator.addtodo({ id: 3, message: "Hello 3" }));
store.dispatch(ActionCreator.addtodo({ id: 4, message: "Hello 4" }));

class ReduxApp extends React.Component {
  constructor(props) {
    super(props);
    this.onClickhandle = this.onClickhandle.bind(this);
  }

  onClickhandle(id) {
    const { dispatch, getState } = this.props.store;
    dispatch(ActionCreator.delayRemove(id));
    console.log(getState());
  }
  render() {
    const { getState } = this.props.store;
    console.log(getState());
    const todos = getState()
      ? getState().todoList.map(todo => {
          return (
            <div key={todo.id}>
              <span>{todo.message}</span>
              <button onClick={() => this.onClickhandle(todo.id)}>
                {" "}
                remove
              </button>
            </div>
          );
        })
      : null;
    return todos;
  }

  componentDidMount() {
    const { subscribe } = this.props.store;
    subscribe(() => {
      this.forceUpdate();
    });
  }
}

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShow: true
//     };
//     this.onClickHandler = this.onClickHandler.bind(this);
//   }

//   onClickHandler() {
//     this.setState({
//       isShow: false
//     });
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.onClickHandler}>Remove</button>
//         {this.state.isShow ? <App></App> : "Hide"}
//       </>
//     );
//   }
// }

ReactDOM.render(
  <BrowserRouter>
    <ReduxApp store={store} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
