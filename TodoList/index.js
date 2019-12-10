console.log("App is working");

// DOM element
let userInputElement = document.querySelector(".inputBar");
let todoListElement = document.querySelector(".todoList");

// State
const state = {};
Object.defineProperty(state, "todoList", {
  get() {
    return this._todoList;
  },
  set(val) {
    console.log("set todoList");
    this._todoList = val;
    render(todoListElement, generateTodoListTmp());
    localStorage.setItem("todoList", JSON.stringify(state.todoList));
  }
});

Object.defineProperty(state, "toDoCounter", {
  get() {
    return this._toDoCounter;
  },
  set(val) {
    console.log("set todoCounter");
    this._toDoCounter = val;
    localStorage.setItem("toDoCounter", JSON.stringify(state.toDoCounter));
  }
});
Object.defineProperty(state, "userInput", {
  get() {
    return this._userInput;
  },
  set(val) {
    console.log("set userInput");
    this._userInput = val;
    userInputElement.value = this._userInput;
    localStorage.setItem("userInput", JSON.stringify(state.userInput));
  }
});

let userInput = "";
function toDoCounterIncreament() {
  toDoIdCounter++;
}

class ToDo {
  constructor(content, id) {
    this.content = content;
    this.id = id ? id : state.toDoCounter++;
    console.log("counter", state.toDoCounter);
  }
  generateTmp() {
    return `<li>${this.content} <button onclick="hanlderRemove(${this.id})">Remove</button></li>`;
  }
}

// Setup Event
eventSetup();
function eventSetup() {
  userInputElement.addEventListener("keyup", handlerKeyup);
}

// UI Tmp
function generateTodoListTmp() {
  let resTmp = "";
  state.todoList.forEach(itemToDo => {
    resTmp += itemToDo.generateTmp();
  });
  return resTmp;
}
function render(rootElement, tmp) {
  rootElement.innerHTML = tmp;
}

// Event Handler
function handlerKeyup() {
  state.userInput = event.target.value;
  if (event.keyCode === 13) {
    console.log("keyup Enter");
    // update State
    addTodo(new ToDo(state.userInput));
    setUserInput("");
  }
}

function setUserInput(val) {
  state.userInput = val;
}

function hanlderOnsubmit() {
  event.preventDefault();
}

function hanlderRemove(id) {
  console.log("remove");
  // update State
  removeTodo(id);
  // updaste View
  render(todoListElement, generateTodoListTmp());
}

// business logic

function addTodo(todo) {
  var tmp = [...state.todoList];
  tmp.push(todo);
  state.todoList = tmp;
  console.log(state);
}

function removeTodo(id) {
  state.todoList = state.todoList.filter(itemTodo => {
    if (itemTodo.id === id) {
      return false;
    } else {
      return true;
    }
  });
}

/// Set get

// let obj = {};
// Object.defineProperty(obj, "fisrtName", {
//   get() {
//     console.log("get");
//     return obj.name;
//   },
//   set(data) {
//     console.log("set");
//     obj.name = data;
//   }
// });

// obj.fisrtName = { value: "Sam" };
// obj.fisrtName = { ...obj.fisrtName, value: "patrick" };
// function init() {
//   if (localStorage.getItem("todoList")) {
//     todoList = JSON.parse(localStorage.getItem("todoList")).map(item => {
//       return new ToDo(item.content, item.id);
//     });
//     console.log(todoList);
//     render(todoListElement, generateTodoListTmp());
//   }
//   toDoIdCounter =
//     localStorage.getItem("todoList") &&
//     localStorage.getItem("todoList").length > 0
//       ? ++todoList[todoList.length - 1].id
//       : 1;
// }
// init();

function init() {
  // init ToDoList
  if (localStorage.getItem("todoList")) {
    console.log("init todolist");
    state.todoList = JSON.parse(localStorage.getItem("todoList")).map(item => {
      return new ToDo(item.content, item.id);
    });
  } else {
    state.todoList = [];
  }

  // init Counter
  if (localStorage.getItem("toDoCounter")) {
    console.log(typeof localStorage.getItem("toDoCounter"));
    state.toDoCounter = +JSON.parse(localStorage.getItem("toDoCounter"));
  } else {
    state.toDoCounter = 1;
  }
}
init();
