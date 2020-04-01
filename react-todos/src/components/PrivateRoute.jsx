import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authControl } from '../utils'
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../actions';
const PrivateRoute =  ({username, password, children, setAuth, auth, ...rest}) => {
  const dispatch = useDispatch();
    useEffect(() => {
        authControl.authenticate(username, password).then(token => {
            setAuth(true)
            console.log(token)
            dispatch(fetchTodos(token));
            //console.log('data', data)
        })
    },[])
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