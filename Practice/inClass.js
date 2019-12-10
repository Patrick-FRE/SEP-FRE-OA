console.log('app is working');

//Model
const Model = (function() {
  return {};
})();

//view
const View = (function() {
  const DOMString = {
    userInput: '.userInput',
    todoList: '.todoList'
  };
  return {};
})();

//controller
const Controller = (function() {
  function eventSetup() {
    document.querySelector(
      view.DOMString.userInput,
      addEventListener('keyup', callback)
    );
    console.log('keyup');
  }
  function init() {
    console.log('Controller init');
    eventSetup();
  }
  return {
    init
  };
})();

Controller.init();
