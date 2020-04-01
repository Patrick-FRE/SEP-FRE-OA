import {LOG_IN, FETCH_TODOS} from './type';

export const logIn = userInfo => {
  console.log('logIn action', userInfo)
  return {
    type: LOG_IN,
    payload: userInfo
  };
};

export const getTodo = () => {
  
}

// export const fetchTodos = () => async dispatch => {
  
// }
