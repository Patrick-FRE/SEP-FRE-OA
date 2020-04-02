//import { createStore } from "redux";
const thunk = require("redux-thunk").default;
const { createStore, applyMiddleware } = require("redux");
// action type
const INCREAMENT = "INCREAMENT";
/// action creator
const increament = () => {
  return {
    type: INCREAMENT
  };
};

const delayIncreament = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increament());
    }, 5000);
  };
};

const actionCreator = {
  increament,
  delayIncreament
};

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREAMENT:
      return state + 1;
    default:
      return state;
  }
};
const store = createStoreA(reducer);

console.log("store:", store);
console.log("currentState:", store.getState());
let unsubscribe = store.subscribe(() => {
  console.log("subscribe, currentState:", store.getState());
});

store.dispatch(actionCreator.increament());
store.dispatch(actionCreator.increament());

store.dispatch(actionCreator.delayIncreament());

function createStoreA(reducer) {
  let currentState;
  let listener = [];
  dispatch({ type: "INIT_STORE" });

  function getState() {
    return currentState;
  }
  function dispatch(action) {
    // dispatch => {
    //     setTimeout(() => {
    //       dispatch(increament());
    //     }, 5000);
    //   };
    if (typeof action === "function") {
      action(store.dispatch);
    } else {
      currentState = reducer(currentState, action);
      // let listenrCopy = [...listener];
      // while (listenrCopy.length > 0) {
      //   let first = listenrCopy.shift();
      //   first();
      // }

      listener.forEach(cb => cb());
    }
  }
  function subscribe(cb) {
    listener.push(cb);

    return () => {
      listener.splice(listener.indexOf(cb), 1);
    };
  }
  return {
    getState,
    dispatch,
    subscribe
  };
}
