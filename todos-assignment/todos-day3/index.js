// MVC Model View Controller Angular, || MVVM Model View ViewModel React Angular 2+
// Data binding :  View to model(use event to do the binding) || Model to View(DOM change + Setter)
// What is State:

/// wirte you business logic to change the state
/// rerender the newState to the UI.

// const inputElement = document.querySelector(".input-bar");
// console.log(textElement);
// console.log(inputElement);

// let state = {};
// let _userInput = "";

// Object.defineProperty(state, "userInput", {
//   get() {
//     console.log("get");
//     return _userInput;
//   },
//   set(newValue) {
//     _userInput = newValue;
//     textElement.innerHTML = _userInput;
//   }
// });

// inputElement.addEventListener("keypress", event => {
//   textElement.innerHTML = event.target.value;
// });

/// strict mode


const View = (() => {
    const DOMString = {
      inputElement: ".input-bar",
      todoListContent: ".todo-list-content",
      todoListContentItem: ".todo-list-content__item"
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
        return ` <li class="todo-list-content__item" >${this.title} <button id=${this.id} class="btn btn-remove"  >Remove </button></li>`;
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
  
    const setUpUIbtnRemoveClick = () => {
      const todoListContent = document.querySelector(
        view.DOMString.todoListContent
      );
      todoListContent.addEventListener("click", event => {
        if (event.target.className === "btn btn-remove") {
          removeTodo(event.target.id);
        }
      });
    };
  
    const setUpUIbtnRemoveToggle = () => {
      const todoListContentItem = document.querySelectorAll(
        view.DOMString.todoListContentItem
      );
      todoListContentItem.forEach(liElement => {
        liElement.addEventListener("mouseenter", mouseenterHanlder);
  
        liElement.addEventListener("mouseleave", mouseleaveHanlder);
      });
    };
  
    // event bubbling vs event capturing
  
    const mouseenterHanlder = event => {
      let btn = event.target.querySelector(".btn-remove");
      btn.style.visibility = "visible";
    };
    const mouseleaveHanlder = event => {
      let btn = event.target.querySelector(".btn-remove");
      btn.style.visibility = "hidden";
    };
  
    const updateUItodoList = (todoList, renderElement) => {
      let tmp = todoList
        .map(todo => {
          return todo.generateTemplate();
        })
        .join("");
      console.log("Tmp", tmp);
      view.render(tmp, renderElement);
    };

    
  
    class State {
      constructor() {
        this._userInput = "";
        this._todoList = []
      }

      get todoList () {
        return this._todoList;
      
      }
  
      set todoList(newValue) {
        console.log("set TodoList");
        this._todoList = newValue;
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
      console.log('newTodo', newTodo)
      
      state.todoList = [...state.todoList, newTodo];
      postTodos(newTodo);
    };
  
    const removeTodo = id => {
      //deleteTodo(id);
      state.todoList = state.todoList.filter(todo => todo.id != id);
    };
  
    const setUpEvent = () => {
      console.log("setUpEvent");
      let inputElement = document.querySelector(view.DOMString.inputElement);
      inputElement.addEventListener("keyup", event => {
        state.userInput = event.target.value;
        if (event.keyCode === 13) {
          console.log("Enter");
          /// Add New Todo
          let newTodo = new model.Todo(state.userInput);
          console.log(newTodo);
          addTodo(newTodo);
          console.log(state);
          /// clean the UserInput
          state.userInput = "";
        }
      });
      setUpUIbtnRemoveClick();
      // hover event
  
      // let todoListContent = document.querySelector(
      //   view.DOMString.todoListContent
      // );
      // console.log(todoListContent);
  
      // todoListContent.addEventListener("mouseenter", () => {
      //   console.log(event.target);
      // });
    };


    const loginAuth = async () => {
      let userInfo = {
           "username": "test5",
           "password": "test5"
      }
      let token = JSON.parse(sessionStorage.getItem('todoToken'));

      let h = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })

      userLogin(h, userInfo);
      fetchTodos(h)
    }
  
    const userLogin = async (h, info) => {
      let response = await fetch("https://us-central1-todos-server.cloudfunctions.net/api/user/login", {
        method: 'POST',
        headers: h,
        body: JSON.stringify(info)
      })
      let data = await response.json();
      console.log('getTodos', data)
  
    }
    const fetchTodos = async (h) => {
      let response = await fetch('https://us-central1-todos-server.cloudfunctions.net/api/todos/', {
        method:'GET', 
        headers:h
      })
      let data = await response.json()
      let todos = data.data.map(d => new model.Todo(d.content));
      state.todoList = [...state.todoList, ...todos]
      console.log('state is', )
      console.log('todos after fetch', state.todoList);
    }
  
    const postTodos = async(newTodo) => {
      let h = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1IiwidXNlcm5hbWUiOiJ0ZXN0NSIsInBhc3N3b3JkIjoidGVzdDUiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NDU1NDA5MiwiZXhwIjoxNTg0ODU0MDkyfQ.d_8bsXcX8C7cPfcpsbJsMRklts1o1JifSKJYfmYfz4E `,
      })
      let response2 = await fetch('https://us-central1-todos-server.cloudfunctions.net/api/todos/', {
        method: 'POST',
        headers: h,
        body:JSON.stringify({"todo" :  newTodo.title})
      })
      let data2 = await response2.json();
      console.log('posted', data2)
  
  }
    const init = () => {
      console.log("app is working");
      setUpEvent();
    };
  
    return {
      init,
      loginAuth
    };
  })(View, Model);

  window.addEventListener("DOMContentLoaded", () => {
    Controller.init();
    sessionStorage.setItem('todoToken', JSON.stringify(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1IiwidXNlcm5hbWUiOiJ0ZXN0NSIsInBhc3N3b3JkIjoidGVzdDUiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NDU1NDA5MiwiZXhwIjoxNTg0ODU0MDkyfQ.d_8bsXcX8C7cPfcpsbJsMRklts1o1JifSKJYfmYfz4E `));
    Controller.loginAuth()
  });
  
