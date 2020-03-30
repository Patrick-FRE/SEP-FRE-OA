import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authControl } from '../utils'
const PrivateRoute =  ({username, password, children, ...rest}) => {
    console.log('private route');
    const [promiseResolved, setPromiseResolved] = useState(false)
    useEffect(() => {
        authControl.authenticate(username, password).then(data => {
            setPromiseResolved(true);
            console.log(data);
        })
    })
    if (promiseResolved) return (
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