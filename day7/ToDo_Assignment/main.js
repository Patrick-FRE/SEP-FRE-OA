const View = (() => {
  const DOMString = {
    inputElement: ".input-bar",
    todoListContent: ".todo-list-content",
    deleteBtn: ".btn-delete"
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
      return `<li class="todo-list-content__item">${this.title}<span><button data-id=${this.id} class="btn-delete">delete</button></span></li>`;
    }
  }
  return {
    Todo
  };
})();

const Controller = ((view, model) => {
  const inputEle = document.querySelector(view.DOMString.inputElement);
  const todoListContent = document.querySelector(view.DOMString.todoListContent);

  const todo = new model.Todo("test");
  console.log(todo);

  class State {
    constructor() {
      this._userInput = "";
      this._todoList = [];
    }

    get todoList() {
      return this._todoList;
    }

    set todoList(newValue) {
      console.log("set TodoList");
      this._todoList = newValue;

      let tmp = this._todoList
        .map(todo => {
          return todo.generateTemplate();
        })
        .join("");
      console.log("Tmp", tmp);
      view.render(tmp, todoListContent);  
    }

    get userInput() {
      console.log("get");
      return this._userInput;
    }

    set userInput(newValue) {
      console.log("set");
      this._userInput = newValue;
      inputEle.value = this._userInput;
    }
  }

  let state = new State();

  const addTodo = newTodo => {
    state.todoList = [...state.todoList, newTodo];
  };

  const removeTodo = id => {
    state.todoList = state.todoList.filter(todo => todo.id !== id);
  }

  const setUpEvent = () => {
    console.log("setUpEvent");
    let todoList__Container = document.querySelector(view.DOMString.todoListContent);
    let inputElement = document.querySelector(view.DOMString.inputElement);
    inputElement.addEventListener("keyup", event => {
      state.userInput = event.target.value;
      if (event.keyCode === 13) {
        console.log("Enter");
        //Add New Todo
        let newTodo = new model.Todo(state.userInput);
        console.log(newTodo);
        addTodo(newTodo);
        console.log(state);
        //clean the UserInput
        state.userInput = "";
      }
    });
    todoList__Container.addEventListener("click", event => {
      let todo_Id = Number(event.target.dataset.id);
      if (event.target.className === 'btn-delete') {
        removeTodo(todo_Id);
      }
    });
  };

  const init = () => {
    console.log("app is working");
    setUpEvent();
  };

  return {
    init
  };
})(View, Model);

window.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
