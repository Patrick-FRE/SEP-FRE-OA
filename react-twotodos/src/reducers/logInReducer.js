import {LOG_IN} from '../actions/type';
const INITIAL_STATE = {
  isLoggedIn: false
}
export default (state=INITIAL_STATE, action) => {
 
  switch(action.type) {
    case LOG_IN:
      return {...state, isLoggedIn: action.loggedIn}
    default:
      return state;
  }
};