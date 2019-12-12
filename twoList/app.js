//set state todo
let todoList = [];
let doneList = [];

const addForm = document.querySelector('.addForm');
const todos = document.querySelector('.todos');
const finishedButton = document.querySelector('.finished');
const unfinishedButton = document.querySelector('.unfinished');
const done = document.querySelector('.done');
const edit = "edit";
const update = "update";


function generateUI(data, id){
    let html='';
    data.forEach((element,index) =>{
        if(index == id){
            html += `<li>
            <input type="checkbox" class="checkTodo" id="${index}">
            <textarea class="span" id="${index}">${element}</textarea>
            <button class="delete" id="${index}">delete</button>
            <button class="${update}" id="${index}">${update}</button>
            </li>`;
        }else{
            html += `<li>
            <input type="checkbox" class="checkTodo" id="${index}">
            <span class="span" id="${index}">${element}</span>
            <button class="delete" id="${index}">delete</button>
            <button class="${edit}" id="${index}">${edit}</button>
            </li>`
        } 
    })
    return html;
}

function render(rootElement, children){
    rootElement.innerHTML = children;
}

addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addForm.newTodo.value.trim();
    if(todo.length > 0){
        todoList.push(todo);
        render(todos, generateUI(todoList))
    }
    addForm.reset();
})

todos.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        console.log(todoList);
        todoList = todoList.filter((element, index)=> index !== parseInt(e.target.id));
        render(todos, generateUI(todoList));
    }
    if(e.target.classList.contains('edit')){
        // console.log(e.target.id);
        render(todos, generateUI(todoList, e.target.id));
    }
    if(e.target.classList.contains('update')){
        const newTodo = e.target.parentElement.children[1].value;
        todoList[+e.target.id] = newTodo;
        render(todos, generateUI(todoList));
    }
})

done.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        console.log(todoList);
        doneList = doneList.filter((element, index)=> index !== parseInt(e.target.id));
        render(done, generateUI(doneList));
    }
})

finishedButton.addEventListener('click', e =>{
    const Mycheck = document.querySelectorAll('.checkTodo');
    const checkedIdList = [];
    Mycheck.forEach(element =>{
        if(element.checked){
            let spantag = element.parentElement.children[1];
            doneList.push(spantag.textContent);
            console.log(element.id);
            checkedIdList.push(element.id);
            // render(done, generateUI(doneList));
            // render(todos, generateUI(todoList));
        }
        element.checked = false;
    })
    todoList = todoList.filter((item, index) => !checkedIdList.includes(index.toString()));
    render(done, generateUI(doneList));
    render(todos, generateUI(todoList));
})

unfinishedButton.addEventListener('click', e =>{
    const Mycheck = document.querySelectorAll('.checkTodo'); //checkbox
    const checkedIdList = [];
    Mycheck.forEach(element =>{
        if(element.checked){
            todoList.push(element.parentElement.children[1].textContent);
            checkedIdList.push(element.id);
        }
        element.checked = false;
    })
    doneList = doneList.filter((item, index) => !checkedIdList.includes(index.toString()));
    render(todos, generateUI(todoList));
    render(done, generateUI(doneList));
})