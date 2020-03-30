import React, { useEffect, } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authControl } from '../utils'
const PrivateRoute =  ({username, password, children, setAuth, auth, ...rest}) => {
    useEffect(() => {
        authControl.authenticate(username, password).then(data => {
            setAuth(true)
        })
    })
    if (auth) return (
      <Route
        {...rest}
        render={({ location }) =>
          authControl.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
    else {
        return <div>Checking credentials...</div>
    }
  }

  export default PrivateRoute;