//View(cb)()      --- feature: reach the DOM, get data
  // record DOM element.
  // func: update DOM ele innerHTML.
  // return DOMString obj & func. 

//Model()()        ----- feature: internally structure data
  // create content_item state from the param. (ToDo constructor class)
  // func: generate template string from state.
  // return Todo constructor class.

//Controller((view, model))    ----feature: event listeners, communicate between DOM & Model, initiate the app.
  //obtain data from DOM event, 
  //obtain DOM ele from view, 
  //Pass & structure data from Model, 
  //set App state for source of truth and accessors: bind view with manipulated data.


//generate delete button for each item added to the list.

const View = (() => {
    const DOMString = {
      inputElement: ".input-bar",
      todoListContent: ".todo-list-content",
      todoListItem:".todo-list-item",
    };
  
    const render = (template, element) => {
      element.innerHTML = template;
      console.log(element)
    };
  
    return {
      
      DOMString,
      render
    };
  })();
  
  //Model
  const Model = (() => {
    let id = 0;
    class Todo {
      constructor(title) {
        this.title = title;
        this.id = id;
        id++;
      }
  
      generateTemplate = () => {
        let template = `<div class="todo-list-item" id="${this.id}">${this.generateList()}${this.generateDelBtn()}</div>`
        return template;
      }
      generateList(){
        return ` <li class="todo-list-content__item">${this.title}</li>`;
      }
      generateDelBtn(){
        return `<button class=".delete-todo-list-content" onclick="${(e => this.getItemId(this.id))()}">delete</button>`;

      }
      getItemId(deleteItemFunc){
        /*if(element !== undefined) {
          var parent = element.parentNode;
          alert(parent.id);
         
        } else {
          return "undefined";
        }*/
      }
    }
  
    return {
      Todo
    };
  })();
  
  //Controller 
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
        this.itemId = null;
      }
  
      get todoList() {
        return this._todoList;
      }
  
      set todoList(newValue) {
        console.log("set TodoList", newValue) ;
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
      onDeleteItem(newTodo);
    };

    const deleteTodo = id => {
      state.todoList = state.todoList.filter(todo => todo.id === id)
    };
  
    const setUpEvent = () => {
      console.log("setUpEvent");
      onInputChange();
      onDeleteItem();
      
    };
    const onInputChange = () =>{
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
      })
    };

    const onDeleteItem = (todo) => {
      let divDelete = document.querySelectorAll(view.DOMString.todoListItem);
      for(let i = 0; i< divDelete.length; i++){
        if(divDelete[i].id == todo.id){
          console.log('yes');
        }
      }
      
      console.log('divDelete', divDelete)
      //divDelete.onclick = onDeleteItem;
      //view.getItemId(onDeleteItem);
      /*console.log('delete ', newTodo)
      console.log('original', state.todoList)
      state.todoList.filter(item => {
        console.log(item.id === id)
      });
      
      state.todoList = [...state.todoList];
      console.log('later', state.todoList);

      */
    }
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
  