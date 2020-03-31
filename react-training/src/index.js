import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./TodoApp";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoAPI from "./utils/todosAPI";
//import { Provider, connect } from "react-redux";
import { Provider, connect } from "./React-Redux/ReactRedux";

// Provider is Component provide the context data;
// connect is HOC provide the props to WrappedComponnet;

// core concept:
// one store / pure function / data imutable
// Store / Reducer / Action / ActionCreator / Action Type / combineReducer / dispatch / applyMiddleware / subscribe
// Action type
const ADDONETODO = "ADDONETODO";
const REMOVETODO = "REMOVETODO";
const GET_TODOS_START = "GET_TODOS_START";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAIL = "GET_TODOS_FAIL";
const REMOVE_TODOS_START = "REMOVE_TODOS_START";
const REMOVE_TODOS_SUCCESS = "REMOVE_TODOS_SUCCESS";
const REMOVE_TODOS_FAIL = "REMOVE_TODOS_FAIL";

const ActionType = {
  ADDONETODO,
  REMOVETODO,
  GET_TODOS_START,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  REMOVE_TODOS_START,
  REMOVE_TODOS_SUCCESS,
  REMOVE_TODOS_FAIL
};

// Action Creator

const removeTodo = id => {
  console.log("removeTodo");
  return dispatch => {
    dispatch(removeTodoStart());
    todoAPI
      .removeTodo(id)
      .then(data => {
        console.log("remove res:", data);
        if (data.errno === 0) {
          dispatch(removeTodoSuccess());
          dispatch(getTodoStart());
          todoAPI
            .getTodos()
            .then(data => {
              if (data.errno === 0) {
                dispatch(getTodoSuccess(data.data));
              } else {
                dispatch(getTodoFail(data));
              }
            })
            .catch(error => {
              console.log("error");
              getTodoFail(error);
            });
        } else {
          dispatch(removeTodoFail(data));
        }
      })
      .catch(error => {
        dispatch(removeTodoFail(error));
      });
  };
};

const removeTodoStart = () => {
  return { type: ActionType.REMOVE_TODOS_START };
};
const removeTodoSuccess = () => {
  return { type: ActionType.REMOVE_TODOS_SUCCESS };
};

const removeTodoFail = () => {
  return { type: ActionType.REMOVE_TODOS_FAIL };
};
const fetchTodos = () => {
  console.log("fetch");
  return dispatch => {
    console.log("async fetch");
    dispatch(getTodoStart());
    todoAPI
      .getTodos()
      .then(data => {
        console.log(data);
        if (data.errno === 0) {
          dispatch(getTodoSuccess(data.data));
        } else {
          dispatch(getTodoFail(data));
        }
      })
      .catch(error => {
        console.log("error");
        getTodoFail(error);
      });
  };
};

const getTodoStart = () => {
  console.log("getTodoStart");
  return { type: ActionType.GET_TODOS_START };
};

const getTodoSuccess = todoList => {
  return { type: ActionType.GET_TODOS_SUCCESS, payload: { todoList } };
};
const getTodoFail = error => {
  return { type: ActionType.GET_TODOS_FAIL, payload: { error: error } };
};

// const addtodo = newTodo => {
//   return { type: ActionType.ADDONETODO, payload: { newTodo } };
// };
// const delayRemove = id => {
//   return function(dispatch) {
//     setTimeout(() => {
//       console.log(id);
//       console.log(dispatch);
//       dispatch(ActionCreator.removeTodo(id));
//     }, 1000);
//   };
// };

// const removeTodo = id => {
//   return { type: ActionType.REMOVETODO, payload: { id } };
// };
const ActionCreator = {
  // addtodo,
  // removeTodo,
  // delayRemove
  removeTodo,
  fetchTodos
};

// Reducer
const initailState = {
  isLoading: false,
  todoList: [],
  error: null
};

const todoReducer = (state = initailState, action) => {
  switch (action.type) {
    case ActionType.REMOVE_TODOS_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.REMOVE_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case ActionType.REMOVE_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case ActionType.GET_TODOS_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.GET_TODOS_SUCCESS:
      console.log("GET TODO SUCCESS");
      return {
        ...state,
        todoList: action.payload.todoList,
        isLoading: false
      };
    case ActionType.GET_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    // case ActionType.ADDONETODO:
    //   return {
    //     ...state,
    //     todoList: [...state.todoList, action.payload.newTodo]
    //   };
    //   break;
    // case ActionType.REMOVETODO:
    //   console.log("remove");
    //   return {
    //     ...state,
    //     todoList: state.todoList.filter(todo => {
    //       return todo.id !== action.payload.id;
    //     })
    //   };
    //   break;
    default:
      return state;
      break;
  }
};
const store = createStore(todoReducer, applyMiddleware(thunk));

// let obj = {
//   type: ActionType.ADDONETODO,
//   payload: { newTodo: { id: 1, message: "Hello 1" } }
// };

// class ObjA {
//   constructor(type) {
//     this.type = type;
//   }
// }
// console.log(obj);

// let objA = new ObjA("test");
// console.log(objA);

// console.log(store);
// console.log(store.getState());
// store.dispatch(obj);
// console.log(store.getState());
// store.subscribe(() => {
//   console.log("hello subscribe");
// });
// store.dispatch(ActionCreator.addtodo({ id: 2, message: "Hello 2" }));
// store.dispatch(ActionCreator.addtodo({ id: 3, message: "Hello 3" }));
// store.dispatch(ActionCreator.addtodo({ id: 4, message: "Hello 4" }));

class ReduxApp extends React.Component {
  constructor(props) {
    super(props);
    this.onClickhandle = this.onClickhandle.bind(this);
  }

  onClickhandle(id) {
    console.log(id);
    this.props.removeTodo(id);
  }
  render() {
    console.log("render");
    const { todoList } = this.props;
    console.log(todoList);
    const todos = todoList
      ? todoList.map(todo => {
          return (
            <div key={todo.id}>
              <span>{todo.content}</span>
              <button onClick={() => this.onClickhandle(todo.id)}>
                remove
              </button>
            </div>
          );
        })
      : null;
    return todos;
  }

  componentDidMount() {
    this.props.fetchTodos();

    // const { subscribe } = this.props.store;
    // subscribe(() => {
    //   this.forceUpdate();
    // });
  }
}
const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    isLoading: state.isLoading
  };
};
const mapDispatchToProps = {
  fetchTodos,
  removeTodo
};

const MyApp = connect(mapStateToProps, mapDispatchToProps)(ReduxApp);

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

// class ChildComponent extends React.Component {
//   render() {
//     console.log(this.context);
//     return <div>ChildComponent{this.props.children}</div>;
//   }
// }

// ChildComponent.contextType = ReduxContext;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </Provider>,
  // <Provider store={store}>
  //   <ChildComponent>
  //     <ChildComponent></ChildComponent>
  //   </ChildComponent>
  // </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
