import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import TodosContainer from './TodosContainer';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import AuthButton from './AuthButton';


const Layout = () => {
    const [todos, setTodo] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false)
    return (
        <>
            <Header>
                <AuthButton auth = {auth}/>
            </Header>
            <Switch>
                <Route path="/" exact>
                    <Login username = {username} 
                           setUsername = {setUsername} 
                           password = {password}
                           setPassword = {setPassword}/>
                </Route>
                <PrivateRoute path="/todos"
                              setAuth = {setAuth} 
                              auth = {auth}
                              password={password}
                              username={username}>
                    <TodosContainer todos = {todos} setTodo = {setTodo} />
                </PrivateRoute>
            </Switch>
        </>
    )
}

export default Layout;