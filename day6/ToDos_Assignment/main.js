fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    let ulList = document.querySelector('.todo-list');
    let showToDo = document.querySelector('.add-do-item');
    let clearToDo = document.querySelector('.clear-do-item');
    let todoData = data.map(el => `<li>id: ${el.id} title: ${el.title}</li>`).join('');
    console.log(data);
    
    showToDo.addEventListener('click', () => {
        ulList.innerHTML = todoData;
    });

    clearToDo.addEventListener('click', () => {
      ulList.innerHTML = '';
    })
    
  });
