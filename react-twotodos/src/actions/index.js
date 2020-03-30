import {LOG_IN, FETCH_TODOS} from './type';

export const logIn = loggedIn => {
  return {
    type: LOG_IN,
    loggedIn
  };
};

// export const fetchTodos = () => async dispatch => {
  
// }
