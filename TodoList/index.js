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
    console.log(val);
    this._todoList = val;
    render(todoListElement, generateTodoListTmp());
    localStorage.setItem("todoList", JSON.stringify(state.todoList));
    console.log(this);
  }
});

// Object.defineProperty(state, "userInput", {
//   get() {
//     return this._userInput;
//   },
//   set(val) {
//     console.log("set todoList");
//     console.log(val);
//     this._todoList = val;
//     render(todoListElement, generateTodoListTmp());
//     localStorage.setItem("todoList", JSON.stringify(state.todoList));
//     console.log(this);
//   }
// });

state.todoList = [];

let userInput = "";
// Model
let toDoIdCounter = 1;

class ToDo {
  constructor(content, id) {
    this.content = content;
    this.id = id ? id : toDoIdCounter++;
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
  userInput = event.target.value;
  if (event.keyCode === 13) {
    console.log("keyup Enter");
    // update State
    console.log(userInput);
    addTodo(new ToDo(userInput));
    userInput = "";
    // update View
    userInputElement.value = userInput;
  }
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
