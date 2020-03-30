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