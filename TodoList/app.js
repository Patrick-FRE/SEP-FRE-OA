console.log("app is working");

// console.log("App is working");

// // State
// let userInput = "dfsfs";
// let todoList = [];

// // Model
// let toDoIdCounter = 1;

// class ToDo {
//   constructor(content) {
//     this.content = content;
//     this.id = toDoIdCounter++;
//   }
//   generateTmp() {
//     return `<li>${this.content} <button onclick="hanlderRemove(${this.id})">Remove</button></li>`;
//   }
// }

// // DOM element
// let userInputElement = document.querySelector(".inputBar");
// let todoListElement = document.querySelector(".todoList");

// // Setup Event
// eventSetup();
// function eventSetup() {
//   userInputElement.addEventListener("keyup", handlerKeyup);
// }

// // UI Tmp
// function generateTodoListTmp() {
//   let resTmp = "";
//   todoList.forEach(itemToDo => {
//     resTmp += itemToDo.generateTmp();
//   });
//   return resTmp;
// }
// function render(rootElement, tmp) {
//   rootElement.innerHTML = tmp;
// }

// // Event Handler
// function handlerKeyup() {
//   userInput = event.target.value;
//   if (event.keyCode === 13) {
//     console.log("enter");
//     // update State
//     addTodo(new ToDo(userInput));
//     userInput = "";
//     // update View
//     render(todoListElement, generateTodoListTmp());
//     userInputElement.value = userInput;
//   }
// }

// function hanlderOnsubmit() {
//   event.preventDefault();
// }

// function hanlderRemove(id) {
//   console.log("remove");
//   // update State
//   removeTodo(id);
//   // updaste View
//   render(todoListElement, generateTodoListTmp());
// }

// // business logic

// function addTodo(todo) {
//   todoList.push(todo);
// }

// function removeTodo(id) {
//   todoList = todoList.filter(itemTodo => {
//     if (itemTodo.id === id) {
//       return false;
//     } else {
//       return true;
//     }
//   });
// }

// Model
const Model = (function() {
  let state = {
    userInput: "",
    todoList: []
  };

  let toDoIdCounter = 1;
  class ToDo {
    constructor(content) {
      this.content = content;
      this.id = toDoIdCounter++;
    }
    generateTmp() {
      return `<li>${this.content} <button class="btnRemove" id="btn-${this.id}">Remove</button></li>`;
    }
  }

  function generateTodoListTmp() {
    let resTmp = "";
    state.todoList.forEach(itemToDo => {
      resTmp += itemToDo.generateTmp();
    });
    return resTmp;
  }

  function addTodo(todo) {
    state.todoList.push(todo);
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

  return {
    state,
    addTodo,
    removeTodo,
    Todo: content => new ToDo(content),
    generateTodoListTmp
  };
})();

// View

const View = (function() {
  const DOMString = {
    inputBar: ".inputBar",
    todoList: ".todoList",
    inputForm: ".inputForm"
  };

  function render(rootElement, tmp) {
    rootElement.innerHTML = tmp;
  }

  return {
    DOMString,
    render
  };
})();

// Controller

const Controller = (function(view, model) {
  function eventSetup() {
    document
      .querySelector(view.DOMString.inputBar)
      .addEventListener("keyup", handlerKeyup);
    document
      .querySelector(view.DOMString.inputForm)
      .addEventListener("submit", hanlderOnsubmit);
    document
      .querySelector(view.DOMString.todoList)
      .addEventListener("click", () => {
        if (event.target.className === "btnRemove") {
          console.log(event.target.id.substring(4));
        }
      });
  }
  function hanlderRemove(id) {
    console.log("remove");
    // update State
    model.removeTodo(id);
    // updaste View
    view.render(
      document.querySelector(view.DOMString.todoList),
      model.generateTodoListTmp()
    );
  }

  function hanlderOnsubmit() {
    event.preventDefault();
  }

  function handlerKeyup() {
    model.state.userInput = event.target.value;
    if (event.keyCode === 13) {
      console.log("enter");
      // update State
      model.addTodo(model.Todo(model.state.userInput));
      model.state.userInput = "";
      // update View
      view.render(
        document.querySelector(view.DOMString.todoList),
        model.generateTodoListTmp()
      );
      document.querySelector(view.DOMString.inputBar).value =
        model.state.userInput;
    }
  }

  function init() {
    console.log("Controller init");
    eventSetup();
  }

  return {
    init,
    hanlderRemove
  };
})(View, Model);

Controller.init();
