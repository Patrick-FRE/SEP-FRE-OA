const getButton = document.querySelector('.get-todos')
const deleteButton = document.querySelector('.delete-todos')
const list = document.querySelector('.todos')

const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response=> response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const z = document.createElement('li');
            z.innerHTML = `${data[i].id}: ${data[i].title}`;
            list.appendChild(z);
        }
    }).catch(err => {
        console.log('error:', err);
    })
}
getButton.addEventListener('click', getTodos)

deleteButton.addEventListener('click', () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
})