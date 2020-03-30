import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_TODO,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL,
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL
} from "../actions/actions";

const initialState = {
  todoList: [],
  todo: "",
  username: "",
  password: "",
  token: "",
  isLogin: false,
  isFetch: false,
  isAdd: false,
  error: ""
};

const loginReducer = function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return { ...state, username: action.payload };

    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };

    case CHANGE_TODO:
      return { ...state, todo: action.payload };

    case LOGIN_USER_START:
      return {
        ...state,
        isLogin: true,
        error: ""
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        username: "",
        password: "",
        token: action.payload.token,
        isLogin: false
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        username: "",
        password: "",
        error: action.payload.error,
        isLogin: false
      };
    case FETCH_TODOS_START:
      return {
        ...state,
        isFetch: true
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetch: false,
        todoList: action.payload.data
      };
    case FETCH_TODOS_FAIL:
      return {
        ...state,
        isFetch: false,
        error: action.payload.data
      };
    case ADD_TODO_START:
      return {
        ...state,
        isAdd: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isAdd: false,
        todo: ""
      };
    case ADD_TODO_FAIL:
      return {
        ...state,
        isAdd: false,
        error: action.payload.data
      };
  }
  return state;
};

export default loginReducer;
