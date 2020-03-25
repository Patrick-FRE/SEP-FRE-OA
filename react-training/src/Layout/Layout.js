import React from 'react';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

export default class Layout extends React.Component {

    render() {
        console.log(this.props.children);
        return (
            <>
                <Header />
                <TodoList />
            </>
        )

    }
}