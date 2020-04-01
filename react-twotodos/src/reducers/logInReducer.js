import {LOG_IN} from '../actions/type';
const INITIAL_STATE = {
  isLoggedIn: null,
  userInfo: null,
}
export default (state=INITIAL_STATE, action) => {
  console.log('loginReducer', action)
  switch(action.type) {
    case LOG_IN:
      return {...state, isLoggedIn: true, userInfo: action.payload}
    default:
      return state;
  }
};