import React from 'react';
import { useHistory } from 'react-router-dom';
import { authControl } from '../utils';
const AuthButton = ({auth}) => {
    let history = useHistory();
    if (auth) {
        return (
        <button
          onClick={() => {
            authControl.isAuthenticated = false;
            return history.push("/")
          }}
        >
          Sign out
        </button>
    )
  }else {
      return <div></div>
  }
}

  export default AuthButton;