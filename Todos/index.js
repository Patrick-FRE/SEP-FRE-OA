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
     class Todo {
          constructor(content, id) {
               this.content = content;
               this.id = id;
               id++;
          }
          generateTemplate() {
               return ` <li class="todo-list-content__item" >${this.content} <button id=${this.id} class="btn btn-remove"  >Remove </button></li>`;
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
               this._todoList = newValue;
               updateUItodoList(this._todoList, todoListContent);
               setUpUIbtnRemoveToggle();
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

     const addTodo = (content) => {
          todoApi.addTodo(content);
     };

     const removeTodo = id => {
          todoApi.removeTodo(id);
     };

     const setUpEvent = () => {
          let inputElement = document.querySelector(view.DOMString.inputElement);
          inputElement.addEventListener("keyup", event => {
               state.userInput = event.target.value;
               if (event.keyCode === 13) {
                    // console.log("Enter");
                    /// Add New Todo
                    let newTodo = state.userInput;
                    addTodo(newTodo);
                    // console.log(state);
                    /// clean the UserInput
                    state.userInput = "";
               }
          });
          setUpUIbtnRemoveClick();
     };
     /////------TODOS API EVENT ---------------////
     const todoApi = (() => {
          const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api";
          let token = localStorage.getItem("token") || "no token yet";

          ///--------------LOGIN-------------///
          const loginAutomatically = async () => {
               try {
                    console.log("Login working");
                    let info = {
                         "username": "test1",
                         "password": "test1"
                    }

                    let response = await fetch(`${baseURL}/user/login`,
                         {
                              method: 'POST',
                              headers: {
                                   'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(info)
                         })
                    let data = await response.json();
                    localStorage.setItem("token", data.data.token);
               } catch (err) {
                    console.log("Login error: ", err);
               }
          }
          ///----- FETCH TODOS---- //////
          const setupTodoList = async () => {
               try {
                    let token = localStorage.getItem("token");
                    let response = await fetch(`${baseURL}/todos`,
                         { method: 'GET', headers: { Authorization: `Token ${token}` } }
                    )
                    let todos = await response.json();
                    addFetchedTodosToState(todos.data)
               } catch (err) {
                    console.log("Fetching Todos Error: ", err);
               }
          }
          ////----------ADD FETCHED TODOS DATA TO STATE--------------////
          const addFetchedTodosToState = (todos) => {
               if (todos.length > 0) {
                    state.todoList = todos.map(todo => new model.Todo(todo.content, todo.id))
               } else {
                    state.todoList = []
               }

          }
          const addTodo = async (content) => {
               try {
                    let response = await fetch(`${baseURL}/todos`,
                         { method: 'POST', headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ todo: content }) }
                    )
                    setupTodoList();
               } catch (err) {
                    console.log("Add todo req failed, Err: ", err);
               }
          }
          const removeTodo = async (id) => {
               try {
                    let response = await fetch(`${baseURL}/todos`,
                         { method: 'DELETE', headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ todoId: id }) }
                    )
                    setupTodoList();
               } catch (err) {
                    console.log("Remove todo req failed, Err: ", err);
               }
          }
          return {
               loginAutomatically,
               setupTodoList,
               addTodo,
               removeTodo
          }
     })();
     //////------------- INIT----------/////
     const init = async () => {
          setUpEvent();
          await todoApi.loginAutomatically();
          todoApi.setupTodoList();
     };

     return {
          init
     };
})(View, Model);

window.addEventListener("DOMContentLoaded", () => {
     Controller.init();
});