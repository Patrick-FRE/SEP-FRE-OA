import * as AuthenticationUtil from '../util/api/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const login = (username, password) => {
  return dispatch => {
    return AuthenticationUtil.login(username, password).then(user => {
      dispatch(receiveCurrentUser(user))
    });
  };
};

export const signup = (username, password) => {
  return dispatch => {
    return AuthenticationUtil.login(username, password).then(user => {
      dispatch(receiveCurrentUser(user))
    });
  };
};

export const logout = () => {
  return dispatch => {
    return AuthenticationUtil.logout().then(user => {
      dispatch(logoutCurrentUser())
    });
  };
};