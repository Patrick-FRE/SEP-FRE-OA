import * as types from "./types";

export const dummyAction = payload => {
    return {
        type: types.DUMMY_ACTION, //required
        payload //optional
    }
}

export const addTodo = todo => {
    console.log('adding todo..')
    return {
        type: types.ADD_TODO,
        todo
    }
}

export const deleteTodo = todo => {
    console.log('deleting todo')
    return {
        type: types.DELETE_TODO,
        todo
    }
}

export const fetchTodos = token => async dispatch => {
    const bearer = "Bearer " + token;
    const url = 'https://us-central1-todos-server.cloudfunctions.net/api/todos/'
    const response = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json',
        }
    })
    const res = await response.json();
    dispatch({
        type: types.FETCH_TODOS,
        todos: res.data
    })
}