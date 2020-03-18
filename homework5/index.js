const View = (() => {
  const DOMString = {
    inputElement: ".input-bar",
    todoListContent: ".todo-list-content",
    deleteButton: ".btn-delete"
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
      return `<li class="todo-list-content__item" >${this.title}<span><button data-id=${this.id} class="btn-edit">Edit</button></span><span><button data-id=${this.id} class="btn-delete">delete</button></span></li>`;
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
      this._todoList = newValue;

      let tmp = this._todoList
        .map(todo => {
          return todo.generateTemplate();
        })
        .join("");
      view.render(tmp, todoListContent);
    }

    get userInput() {
      return this._userInput;
    }

    set userInput(newValue) {
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
  };

  const editTodo = (id, newTitle) => {
    state.todoList = state.todoList.map(todo => {
      if (todo.id === id) {
        todo.title = newTitle;
        return todo;
      }
      return todo;
    });
  };

  const setUpEvent = () => {
    console.log("setUpEvent");
    let edit = false;
    let editId;
    let inputElement = document.querySelector(view.DOMString.inputElement);
    let todoListContainer = document.querySelector(
      view.DOMString.todoListContent
    );

    inputElement.addEventListener("keyup", event => {
      state.userInput = event.target.value;
      if (event.keyCode === 13) {
        let newTodo = new model.Todo(state.userInput);

        edit ? editTodo(editId, event.target.value) : addTodo(newTodo);

        state.userInput = "";
        edit = false;
      }
    });
    todoListContainer.addEventListener("click", e => {
      let todoId = Number(e.target.dataset.id);
      if (e.target.className === "btn-delete") {
        removeTodo(todoId);
      } else if (e.target.className === "btn-edit") {
        edit = true;
        editId = todoId;
        state.userInput = state.todoList.filter(
          todo => todo.id === todoId
        )[0].title;
      }
    });
  };

  const init = () => {
    setUpEvent();
  };

  return {
    init
  };
})(View, Model);

window.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
