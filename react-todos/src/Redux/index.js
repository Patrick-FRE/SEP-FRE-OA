const { createStore } = require('redux');
console.log('createStore', createStore)
const INCREMENT = 'INCREMENT';

const increment = () => {
    return {
        type: INCREMENT
    }
}
const actionCreator = {
    increment
}

const reducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state+1;
        default: 
            return state;
    }
}

const store = createStore(reducer)
console.log('store', store)
console.log('current state: ', store.getState());
store.subscribe(() => {
    console.log('subscribe, currentState: ', store.getState());
})

store.dispatch(actionCreator.increment())
store.dispatch(actionCreator.increment())
store.dispatch(actionCreator.increment())

//create our own store

function myCreateStore(reducer) {
    let state;
    let Listeners = [];
    //dispatch({ type: 'INIT_STORE'})
    function getState(){
        return state;
    }
    function dispatch(action) {
        let state = reducer(state, action);
        Listeners.forEach(cb => cb())
    }
    function subscribe(cb) {
        Listeners.push(cb)
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}