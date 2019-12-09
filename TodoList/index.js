console.log("App is working");

// State
let userInput = "dfsfs";
let todoList = [];

// Model
let toDoIdCounter = 1;

class ToDo {
  constructor(content) {
    this.content = content;
    this.id = toDoIdCounter++;
  }
  generateTmp() {
    return `<li>${this.content} <button onclick="hanlderRemove(${this.id})">Remove</button></li>`;
  }
}

// DOM element
let userInputElement = document.querySelector(".inputBar");
let todoListElement = document.querySelector(".todoList");

// Setup Event
eventSetup();
function eventSetup() {
  userInputElement.addEventListener("keyup", handlerKeyup);
}

// UI Tmp
function generateTodoListTmp() {
  let resTmp = "";
  todoList.forEach(itemToDo => {
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
    console.log("enter");
    // update State
    addTodo(new ToDo(userInput));
    userInput = "";
    // update View
    render(todoListElement, generateTodoListTmp());
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
  todoList.push(todo);
}

function removeTodo(id) {
  todoList = todoList.filter(itemTodo => {
    if (itemTodo.id === id) {
      return false;
    } else {
      return true;
    }
  });
}
