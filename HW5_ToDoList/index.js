const View = (function() {
  const domString = {
    todoList: '#todoList__content',
    todoListInput: '.todoList__inputBar',
    deleteList: '#todoList__content',
    completeList: '#completeList__content'
  };
  return { domString };
})();

const Model = (function() {
  class TodoItem {
    constructor(todoText) {
      this.todoText = todoText;
    }
    generateTodoItem(index) {
      return `<li>${this.todoText}
      <button class="btnComplete" id="complete${index}">Complete</button>
      <button class="btnDelete" id="delete${index}">Delete</button>
      </li>`;
    }
    generateCompleteItem(index) {
      return `<li>${this.todoText}</li>`;
    }
  }
  return { TodoItem };
})();

const Controller = (function(view, model) {
  const renderInputText = (template, element) => {
    element.innerHTML = template;
  };
  const renderCompleteList = (template, element) => {
    element.innerHTML = template;
  };
  class State {
    constructor() {
      this._todoList = [];
      this._completeList = [];
    }
    get todoList() {
      console.log('get todoList');
      return this._todoList;
    }
    set todoList(newValue) {
      console.log('set todoList');
      console.log(newValue);
      this._todoList = newValue;
      let tmp = newValue
        .map((todoItem, index) => todoItem.generateTodoItem(index))
        .join('');
      renderInputText(tmp, elements.todoListElement);
    }
    get completeList() {
      console.log('get completeList');
      return this._completeList;
    }
    set completeList(newValue) {
      console.log('set completeList');
      console.log(newValue);
      this._completeList = newValue;
      let tmp = newValue
        .map((completeItem, index) => completeItem.generateCompleteItem(index))
        .join('');
      renderCompleteList(tmp, elements.completeListElement);
    }
  }

  let state = new State();
  const elements = {
    todoListInputElement: document.querySelector(view.domString.todoListInput),
    todoListElement: document.querySelector(view.domString.todoList),
    deleteListElement: document.querySelector(view.domString.todoList),
    completeListElement: document.querySelector(view.domString.completeList)
  };
  const setEvent = () => {
    elements.todoListInputElement.addEventListener('keyup', () => {
      if (event.keyCode == 13) {
        let newTodo = new model.TodoItem(event.target.value);
        state.todoList = [...state.todoList, newTodo];
      }
    });
    // press delete btn and delete it
    elements.deleteListElement.addEventListener('click', () => {
      if (event.target.className === 'btnDelete') {
        console.log('delete');
        console.log(typeof event.target.id);
        // Delete list
        state.todoList = state.todoList.filter((elem, index) => {
          console.log('delete' + index.toString());
          if ('delete' + index.toString() !== event.target.id) {
            return true; // if true, keep
          } else {
            return false;
          }
        });
      }
    });
    // press complete btn and delete it
    elements.deleteListElement.addEventListener('click', () => {
      if (event.target.className === 'btnComplete') {
        console.log('complete');
        console.log(typeof event.target.id);
        // Delete list
        state.todoList = state.todoList.filter((elem, index) => {
          console.log('complete' + index.toString());
          if ('complete' + index.toString() !== event.target.id) {
            return true; // if true, keep
          } else {
            return false;
          }
        });
      }
    });
    // create complete list
    elements.deleteListElement.addEventListener('click', () => {
      console.log(event.target.value);
      if (event.target.className === 'btnComplete') {
        let newComplete = new model.TodoItem(
          event.target.parentElement.childNodes[0].wholeText
        );
        state.completeList = [...state.completeList, newComplete];
      }
    });
  };

  return {
    initApp: function() {
      console.log('init App');
      setEvent();
    }
  };
})(View, Model);
console.log('View', View);
console.log('Model', Model);
console.log('Controller', Controller);
Controller.initApp();
