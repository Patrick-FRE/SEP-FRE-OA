let todoData = [
  { id: 1, title: "Buy A Book" },
  { id: 2, title: "Buy A Car" },
  { id: 3, title: "Buy A Ball" }
];

const removeTodo = id => {
  let newTodoData = todoData.filter(todo => todo.id !== id);
  if (newTodoData.length === todoData.length - 1) {
    todoData = newTodoData;
    return true;
  }
  return false;
};

export const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todoData);
    }, 1000);
  });
};

export const removeData = id => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (removeTodo(id)) {
        res("ok");
      } else {
        rej("error");
      }
    }, 1000);
  });
};
