import React from 'react';
import './Header.css';

const Logo = () => {
    return <h1>Todo-Manager</h1>
}
export default class Header extends React.Component {
    render() {
        return (
            <header className = 'header'>
            <div className='header-list'>
                <div className='header-list-item'>
                    <Logo />
                </div>
            </div>
            </header>
        )
    }
}