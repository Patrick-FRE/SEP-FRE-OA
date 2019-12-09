console.log("app is working");

// Model
const Model = (function() {
    class Todo{
        constructor(content)
    }


  return {};
})();

// View

const View = (function() {
  const DOMString = {
    inputBar: ".inputBar",
    todoList: ".todoList"
  };

  return {
    DOMString
  };
})();

// Controller

const Controller = (function(view) {
  function eventSetup() {
    document
      .querySelector(view.DOMString.inputBar)
      .addEventListener("keyup", () => {
        console.log("keyup");
      });
  }

  function init() {
    console.log("Controller init");
    eventSetup();
  }

  return {
    init
  };
})(View);

Controller.init();
