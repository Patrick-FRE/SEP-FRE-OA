const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2IiwidXNlcm5hbWUiOiJ0ZXN0NiIsInBhc3N3b3JkIjoidGVzdDYiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NDU1NTE4MywiZXhwIjoxNTg0ODU1MTgzfQ.iYMDDnswVuJ-uPdXeYWyPfUXAm3SAmsQa19ZwQZuhvA";
const apiUrl = "https://us-central1-todos-server.cloudfunctions.net/api/todos";
const todoListHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`
}


const View = (() => {
  const DOMString = {
    inputElement: ".input-bar",
    todoListContent: ".todo-list-content",
    todoListContentItem: ".todo-list-content__item",
    deleteBtn: ".btn-delete",
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

  const setUpUIbtnRemoveClick = () => {
    let todoListContent = document.querySelector(view.DOMString.todoListContent);
    todoListContent.addEventListener("click", event => {
      if (event.target.className === 'btn-delete') {
        removeTodo(event.target.id);
      }
    });
  };

  const setUpUIbtnRemoveToggle = () => {
    const todoListContentItem = document.querySelectorAll(view.DOMString.todoListContentItem);
    todoListContentItem.forEach(liElement => {
      liElement.addEventListener("mouseenter", mouseenterHandler);
      liElement.addEventListener("mouseleave", mouseleaveHandler);
    });
  };

  const mouseenterHandler = event => {
    let btn = event.target.querySelector(".btn-remove");
    btn.style.visibility = "visible";
  };

  const mouseleaveHandler = event => {
    let btn = event.target.querySelector(".btn-remove");
    btn.style.visibility = "hidden";
  };

  const updateUItodoList = (todoList, renderElement) => {
    let tmp = todoList.map(todo => {
      return todo.generateTemplate();
    }).join("");
    console.log("Tmp", tmp);
    view.render(tmp, renderElement);
  };

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

      // let tmp = this._todoList
      //   .map(todo => {
      //     return todo.generateTemplate();
      //   })
      //   .join("");
      // console.log("Tmp", tmp);
      // view.render(tmp, todoListContent); 
      updateUItodoList(this._todoList, todoListContent);
      setUpUIbtnRemoveToggle(); 
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
    // state.todoList = [...state.todoList, newTodo];
    fetch(apiUrl, {
      method: "POST",
      headers: todoListHeaders,
      body: JSON.stringify(newTodo)
    })
  };

  const removeTodo = id => {
    // state.todoList = state.todoList.filter(todo => todo.id !== id);
    fetch(apiUrl, {
      method: "DELETE",
      headers: todoListHeaders
    })
  }
  const setUpTodo = () => {
    fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    })
    .then(response => response.json())
    .then(data => {
      state.todoList = 
    });
  };

  const setUpEvent = () => {
    console.log("setUpEvent");
    
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
    setUpUIbtnRemoveClick();
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
