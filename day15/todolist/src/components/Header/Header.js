import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Logo = () => {
  return <h1>ToDoList Manager</h1>;
}

export default class Header extends React.Component {
  render() {
    return (
      <div className="todo-navbar">
        <nav className="navBar">
          <div className="nav-items">
            <Logo />
          </div>
          <div className="nav-items">
            <Link to='/todo'><span>TODO</span></Link>
          </div>
          <div className="nav-items">
            <Link to='/colored'><span>COLOREDTODO</span></Link>
          </div>
          <div className="nav-items">
            <Link to='login'><span>LOGIN</span></Link>
          </div>
        </nav>
      </div>
    );
  }
};