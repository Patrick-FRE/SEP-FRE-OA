const table = document.querySelector('.content-table');
const open = document.querySelector('.form-fetch');
const close = document.querySelector('.form-close');
let post = null;

async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    let user = await response.json();
    return user;
}

getData().then(data => {
    post = data;
    console.log(data)
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
    const html = `<tr>
        <th>id</th>
        <th>title</th>
        <th>body</th>
        </tr>`;
    table.innerHTML += html;

    post.forEach(element => {
        table.innerHTML += `<tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
    </tr>`;
    });
});

close.addEventListener("click", e =>{
    table.innerHTML = ``;
});
