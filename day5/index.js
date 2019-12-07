const url="https://jsonplaceholder.typicode.com/posts";


function createNode(element){
    return document.createElement(element);
}

function append(parent , element){
    return parent.appendChild(element);
}


function fetchData(){
    
    return fetch(url)
    .then(response => response.json())
    .then(users => {
            console.log(users);
            let tbody=document.getElementById("table-main");
            users.map(user=>{
                let tr=createNode('tr');
                let col1=createNode('td');
                let col2=createNode('td');
                let col3=createNode('td');

                tr.setAttribute("class","tb-row");
                col1.setAttribute("class","tb-col");
                col2.setAttribute("class","tb-col");
                col3.setAttribute("class","tb-col");

                col1.innerHTML=user.userId;
                col2.innerHTML=user.title;
                col3.innerHTML=user.body;
                append(tbody , tr);
                append(tr,col1);
                append(tr,col2);
                append(tr,col3); 
            });      
    })
    .catch(err=>{
        console.log(err);
    });
}

function removeData(){
    let tbody=document.getElementById("table-main");
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}


document.getElementById("fetchData").addEventListener("click",fetchData);
document.getElementById("clearData").addEventListener("click",removeData);