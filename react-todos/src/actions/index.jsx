import * as types from "./types";
import { getData, addData } from '../utils';

export const dummyAction = payload => {
    return {
        type: types.DUMMY_ACTION, //required
        payload //optional
    }
}

export const addTodo = todo => async dispatch => {
    console.log('adding todo..')
    const response = await addData(todo)

}

export const deleteTodo = todo => {
    console.log('deleting todo')
    return {
        type: types.DELETE_TODO,
        todo
    }
}

export const fetchTodos = token => async dispatch => {
    const res = await getData(token);
    dispatch({
        type: types.FETCH_TODOS,
        todos: res.data
    })
}