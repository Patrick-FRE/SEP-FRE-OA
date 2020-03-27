import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return <h1>ToDo-Manager</h1>;
}

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-item"><Logo /></div>
        <div className="header-item">
          <Link to='/todo'>TODO</Link>
        </div>
        <div className="header-item">
          <Link to='/colored'>COLOREDTODO</Link>
          </div>
        <div className="header-item">
          <Link to='/login'>LOGIN</Link>
        </div>
      </header>
    );
  }
}