import { combineReducers } from 'redux';
import * as types from '../actions/types';


const todosReducer = (todos=[],action) => {
    switch(action.type) {
        case (types.ADD_TODO): 
            return [...todos, action.todo];
        
        case (types.DELETE_TODO):
            return todos.filter(todo => todo!==action.todo)

        case (types.FETCH_TODOS):
            return [...todos, ...action.todos]

        default: return todos;
    }

}
export default combineReducers({
    todos: todosReducer
})