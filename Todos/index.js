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
               return ` <li class="todo-list-content__item">${this.title}</li>`;
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

     const todo = new Model.Todo("test");
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

     const setUpEvent = () => {
          console.log("setUpEvent");
          let inputElement = document.querySelector(view.DOMString.inputElement);
          inputElement.addEventListener("keyup", event => {
               state.userInput = event.target.value;
               if (event.keyCode === 13) {
                    console.log("Enter");
                    /// Add New Todo
                    if (state.userInput.length) {
                         let newTodo = new model.Todo(state.userInput);
                         console.log(newTodo);
                         addTodo(newTodo);
                         console.log(state);
                    }
                    /// clean the UserInput
                    state.userInput = "";
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