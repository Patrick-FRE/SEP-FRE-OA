const getBtn = document.querySelector('.get-todos')
const deleteBtn = document.querySelector('.delete-todos')
const todos = document.querySelector('.todos-container')

const renderList = (data) => {
    const list = document.createElement('ul');
    let text = '';
    for (let user of data) {
       const { id, title, completed } = user;
       text += `<div>
                    <li>
                        ${id}: ${title}
                    </li>   
                 completed: ${completed}
                </div>`;
    }
    list.innerHTML = text;
    todos.appendChild(list);
}

const removeList = () => {
    return todos.removeChild(document.querySelector('ul'));
}

const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => renderList(data))
    .catch(err => {
        console.log('error:', err);
    });
}

getBtn.addEventListener('click', getTodos)
deleteBtn.addEventListener('click', removeList);