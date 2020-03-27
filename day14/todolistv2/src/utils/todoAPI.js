const todoData = [
  {id: 1, title: "Buy A Book"},
  {id: 2, title: "Buy A Car"},
  {id: 3, title: "Buy A Ball"}
];

export const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todoData);
    }, 1000);
  });
};


const removeTodo = id => {
  const newData = todoData.filter(todo => todo.id !== id);
  if (newData.length === todoData.length - 1) {
    todoData = newData;
    return true;
  }
  return false;
}

export const removeData = id => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(removeTodo(todoData.id))
    }, 1000);
  });
};
