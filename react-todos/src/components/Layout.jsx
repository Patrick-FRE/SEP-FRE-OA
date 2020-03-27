import React, {useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import TodosContainer from './TodosContainer';
//import variables from '../scss/_variables.scss'
import LoginPage from './Login';

const Layout = () => {
    const [loggedIn, setLogin] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        setLogin(true);
    }
    return (
        <>
            <Header>
                <div>
                    {/*<Link to="/todos"><button>Login</button></Link>*/}
<Link to="/"><button>Sign Out</button></Link>
                </div>
            </Header>
            <Switch>
                <Route path="/" exact>
                    <LoginPage handleLogin = {handleLogin}>
                        <Link to="/todos"><button>Login</button></Link>
                    </LoginPage>
                </Route>
                <Route path="/todos" exact>
                    <TodosContainer />
                </Route>
            </Switch>
        </>
    )
}

export default Layout;