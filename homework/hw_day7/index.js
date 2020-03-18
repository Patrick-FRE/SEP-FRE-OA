const View = (() => {
  const DOMString = {
    inputElement: ".input-bar",
    todoListContent: ".todo-list-content"
  };

  const render = (template, element) => {
    element.innerHTML = template;
  };

  return {
    DOMString,
    render
  };
})();

const Model = (() => {
  let id = 0;
  class Todo {
    constructor(title) {
      this.title = title;
      this.id = id;
      id++;
    }

    generateTemplate() {
      return `<div class="todo-list-content__item"><li>${this.title}</li> <button type="button" class="removeButton" onclick="removeOnClick(${this.id})">Remove</button></div>`;
    }
  }

  return {
    Todo
  };
})();

const Controller = ((view, model) => {
  const inputEle = document.querySelector(view.DOMString.inputElement);
  const todoListContent = document.querySelector(
    view.DOMString.todoListContent
  );

  class State {
    constructor() {
      this._userInput = "";
      this._todoList = [];
    }

    get todoList() {
      return this._todoList;
    }

    set todoList(newValue) {
      //console.log("set TodoList");
      this._todoList = newValue;

      let tmp = this._todoList
        .map(todo => {
          return todo.generateTemplate();
        })
        .join("");
      
      view.render(tmp, todoListContent);
    }

    get userInput() {
      //console.log("get");
      return this._userInput;
    }

    set userInput(newValue) {
      //console.log("set");
      this._userInput = newValue;
      inputEle.value = this._userInput;
    }
  }

  let state = new State();

  window.removeOnClick = (id) => {
    state.todoList = state.todoList.filter(todo => todo.id != id);
  };

  const addTodo = newTodo => {
    state.todoList = [...state.todoList, newTodo];
  };

  const setUpEvent = () => {
    //console.log("setUpEvent");
    let inputElement = document.querySelector(view.DOMString.inputElement);
    inputElement.addEventListener("keyup", event => {
      state.userInput = event.target.value;
      if (event.keyCode === 13) { // hit Enter key
        /// Add New Todo
        let newTodo = new model.Todo(state.userInput);
        addTodo(newTodo);
        /// clean the UserInput
        state.userInput = "";
      }
    });
  };

  const init = () => {
    //console.log("app is working");
    setUpEvent();
  };

  return {
    init
  };
})(View, Model);

window.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
