import React, { useState } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from './Header';
import TodosContainer from './TodosContainer';
import Login from './Login';
import PrivateRoute from './PrivateRoute';


const Layout = () => {
    const [todos, setTodo] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Header>
            </Header>
            <Switch>
                <Route path="/" exact>
                    <Login username = {username} 
                           setUsername = {setUsername} 
                           password = {password}
                           setPassword = {setPassword}/>
                </Route>
                <PrivateRoute path="/todos" 
                              password={password}
                              username={username}>
                    <TodosContainer todos = {todos} setTodo = {setTodo} />
                </PrivateRoute>
            </Switch>
        </>
    )
}

export default Layout;