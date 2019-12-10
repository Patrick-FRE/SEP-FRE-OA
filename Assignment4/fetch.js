const url="https://jsonplaceholder.typicode.com/posts";

function createEle(element){
    return document.createElement(element);
}

function append(parent , child){
    return parent.appendChild(child);
}

function getData() {
    return fetch(url)
    .then(response => response.json())
    .then(users => {
            console.log(users);
            let tbody=document.getElementById("main-table");
            users.map(user=>{
                //creating HTML tag
                let tr = createEle('tr');
                let col_1 = createEle('td');
                let col_2 = createEle('td');
                let col_3 = createEle('td');

                //setting class attribute for each tag
                tr.setAttribute("class","table-row");
                col_1.setAttribute("class","table-col");
                col_2.setAttribute("class","table-col");
                col_3.setAttribute("class","table-col");

                //append parent tag and child tag 
                append(tbody , tr);
                append(tr,col_1);
                append(tr,col_2);
                append(tr,col_3); 

                //setting data
                col_1.innerHTML=user.userId;
                col_2.innerHTML=user.id;
                col_3.innerHTML=user.title;

                
            });      
    })
    .catch(err=>{
        console.log(err);
    });
}

function removeData() {
    let tbody=document.getElementById("main-table");
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}

document.getElementById("getData").addEventListener("click",getData);
document.getElementById("clearData").addEventListener("click",removeData);