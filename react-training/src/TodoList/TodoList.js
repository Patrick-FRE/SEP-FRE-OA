import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';

const todoData = [{id: 1, title: 'Buy A Book'},{id: 2, title: 'Buy A Car'},{id: 3, title: 'Buy A Ball'}]

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todoData);
        },100)
    })
}
export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
    }

    async componentDidMount() {
        const response = await getData();
        this.setState({
            todoList: [...this.state.todoList,...response]
        })
    }
    render() {
        let list = [];
        if (this.state.todoList){
             list = this.state.todoList.map(item =><TodoItem key = {item.id} title = {item.title}></TodoItem>)
        }
        return <ul>{list}</ul>
    }
}