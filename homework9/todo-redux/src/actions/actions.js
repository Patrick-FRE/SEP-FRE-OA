import { login, getTodos, addTodo } from "../util/data";

export const CHANGE_USERNAME = "CHANGE_USERNAME";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

export const CHANGE_TODO = "CHANGE_TODO";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAIL = "FETCH_TODOS_FAIL";

export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";

export const loginUser = (username, password) => dispatch => {
  console.log("login", username, password);
  dispatch({ type: LOGIN_USER_START });
  login(username, password)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    });
};

export const changeUsername = e => {
  return {
    type: CHANGE_USERNAME,
    payload: e.target.value
  };
};

export const changePassword = e => {
  return {
    type: CHANGE_PASSWORD,
    payload: e.target.value
  };
};

export const fetchTodos = () => dispatch => {
  console.log("get todo");
  dispatch({ type: FETCH_TODOS_START });
  getTodos()
    .then(data => data.json())
    .then(data => {
      console.log(data);
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: FETCH_TODOS_FAIL, payload: error });
    });
};

export const changeTodo = e => {
  return {
    type: CHANGE_TODO,
    payload: e.target.value
  };
};

export const addNewTodo = newTodo => dispatch => {
  console.log("add todo");
  dispatch({ type: ADD_TODO_START });
  addTodo(newTodo)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      dispatch({ type: ADD_TODO_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: ADD_TODO_FAIL, payload: error });
    });
};
