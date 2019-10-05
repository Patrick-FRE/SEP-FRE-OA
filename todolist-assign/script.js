const input = document.querySelector('input[id="todo"]');
const add = document.querySelector('button[id="add"]');

const list = document.querySelector('ul');

function addToDo(event) {
  if (event.keyCode === 13 || event.type === 'click') {
    event.preventDefault();

    if (input.value === '') return false;

    if (input.value.length > 32) {
      input.value = ''
      return false;
    }

    const item = document.createElement('li');
    item.classList.add('item');

    const text = document.createElement('span');
    text.classList.add('text');
    text.textContent = input.value;

    const del = document.createElement('input');
    del.classList.add('delete');
    del.type = 'submit';
    del.value = 'DEL';

    item.appendChild(del);
    item.appendChild(text);
    
    list.insertBefore(item, list.children[0]);
    input.value = '';

    item.addEventListener('click', (event) => {
      const container = event.currentTarget;
      container.remove();
    })
  }
}

input.addEventListener('keypress', addToDo);
add.addEventListener('click', addToDo);
