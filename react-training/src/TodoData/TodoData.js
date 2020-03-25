import React from 'react';
import { getData } from '../utils';
export default class TodoData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
    }
    render() {
        return this.props.children(this.state.todoList)
    }
    componentDidMount() {
        const response = await getData();
        this.setState({
            todoList: [...todoList,...response]
        })
    }
}

