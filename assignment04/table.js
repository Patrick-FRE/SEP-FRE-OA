//state
let post = [];


const table = document.querySelector('.content-table');
const open = document.querySelector('.form-fetch');
const close = document.querySelector('.form-close');
const edit = 'Edit';
const update = 'Update';

async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(response);
    let user = await response.json();
    return user;
}

getData().then(data => {
    post = data;
    console.log(data);
});

// function getData(cb){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//            // Typical action to be performed when the document is ready:
//            cb(JSON.parse(xhttp.response));
//         }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xhttp.send();
// }

// let p = new Promise((resolve, reject)=>{
//     getData(resolve);
// }).then(data => {
//     post = data;
//     console.log(post);
// }).catch(err =>{
//     console.log(err);
// })

open.addEventListener("click", e =>{
    render(table, generateUI(post));
});

function generateUI(p, id){
    let html = `<tr>
        <th>id</th>
        <th>title</th>
        <th>body</th>
        <th>status</th>
        <th>edit</th>
        </tr>`;

    p.forEach(element => {
        if(element.id == id){
            html += `<tr">
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td><textarea class="edit-input" name="edit" id="${element.id}">${element.body}</textarea></td>
            <td><button class="remove" id="${element.id}">Remove</remove></td>
            <td><button class="update" id="${element.id}">${update}</button></td>
        </tr>`; 
        // <td><input class="edit-input" name="edit" id="${element.id}" placeholder="${element.body}"></td>
        }else{
            html += `<tr">
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
            <td><button class="remove" id="${element.id}">Remove</remove></td>
            <td><button class="edit" id="${element.id}">${edit}</button></td>
        </tr>`;
        }
    });

    return html;
}

// table.addEventListener('click', e => {
//     if(e.target.classList.contains('remove')){
//         post = post.filter(item=> item.id != parseInt(e.target.id));
//         render(table, generateUI(post));
//     }
    
// })

table.addEventListener('click', e=>{
    if(e.target.classList.contains('remove')){
        post = post.filter(item=> item.id != parseInt(e.target.id));
        render(table, generateUI(post));
    }
    if(e.target.classList.contains('edit')){
        console.log(e.target.id);
        render(table, generateUI(post, e.target.id));
    }
    if(e.target.classList.contains('update')){
        const editInput = document.querySelectorAll(".edit-input");
        let editText = null;
        editInput.forEach(element =>{
            if(element.id == e.target.id){
                console.log(element.id);
                console.log(e.target.id);
                editText = element.value;
            }
        });
        post[e.target.id - 1].body = editText; //element index + 1 = element id
        render(table, generateUI(post));
    }

})

close.addEventListener("click", e =>{
    render(table, ``);
});

function render(rootElement, tmp){
    rootElement.innerHTML = tmp;
}

