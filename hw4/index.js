const show = document.querySelector('.get-todos')
const deleteButton = document.querySelector('.delete-todos')
const list = document.querySelector('.todos')

const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response=> {
        return response.json()
    }).then(data => {
        if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            const z = document.createElement('li');
            z.innerHTML = `${data[i].id}: ${data[i].title}`;
            list.appendChild(z);
        }
    }
    else {
        const z = document.createElement('li');
        z.innerHTML = `${data.id}: ${data.title}`;
        list.appendChild(z);
    }
    }).catch(err => {
        console.log('error:', err);
    })
}
show.addEventListener('click', getTodos)
deleteButton.addEventListener('click', () => {
    document.querySelector('ul').parentElement.removeChild(document.querySelector('ul'))
})