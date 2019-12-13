const addForm = document.querySelector('.add-form');
const addList = document.querySelector('.add-list');
const finishedButton = document.querySelector('.finished');
const doneList = document.querySelector('.done-list');
const unfinishedButton = document.querySelector('.unfinished');
const doneForm = document.querySelector('.done-form-add');

//inial state
let add = [];
let done = [];

//create UI
function generateUI(data){
    let html = '';
    data.forEach(element =>{
        html += `<li class="add-list-item"><input type="checkbox" class="checkbox">${element}</li>`;
    })
    return html;
}

function render(rootElement, childElement){
    rootElement.innerHTML = childElement;
}

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    //console.log('1');
    const todo = addForm.add.value.trim();
    if(todo.length > 0){
        add.push(todo);
    }
    render(addList, generateUI(add));
    addForm.reset();
})

doneForm.addEventListener('submit', e=>{
    e.preventDefault();
    //console.log('1');
    const todo = doneForm.add.value.trim();
    let html = '';
    if(todo.length > 0){
        done.push(todo);
    }
    render(doneList, generateUI(done));
    doneForm.reset();
})

//move to
finishedButton.addEventListener('click', e=>{
    //console.log('clicked');
    const myCheck = document.querySelectorAll('.checkbox');

    myCheck.forEach(element =>{
        if(element.checked){
            const doneTodo = element.parentElement.textContent;
            done.push(doneTodo);
        }
    })
    render(doneList, generateUI(done));
    add = add.filter(element => !done.includes(element));
    render(addList, generateUI(add));
})

//move back
unfinishedButton.addEventListener('click', e=>{
    //console.log('clicked');
    const myCheck = document.querySelectorAll('.checkbox');

    myCheck.forEach(element =>{
        if(element.checked){
            const newTodo = element.parentElement.textContent;
            add.push(newTodo);
        }
    })
    render(addList, generateUI(add));
    done = done.filter(element => !add.includes(element));
    render(doneList, generateUI(done));
})