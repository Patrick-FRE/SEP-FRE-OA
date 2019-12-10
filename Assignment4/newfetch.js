const url="https://jsonplaceholder.typicode.com/posts";

//state
let userInfo = [];

//DOM element
let fetchButton = document.querySelector("#getData");
let clearButton = document.querySelector("#clearData");
let tbody = document.querySelector("#table-content");

//Setup Event
eventSetup();
function eventSetup(){
    //click fetch button
    fetchButton.addEventListener("click",fetchButtonHandler);
    //click clear button
    clearButton.addEventListener("click",clearButtonHandler);
    //click Delete button
    tbody.addEventListener("click",()=>{
        if(event.target.className === 'deleteBtn'){
            console.log("delete handlers");
            deleteButtonHandler(event.target.id);
        }
    });
}

//event handler
function fetchButtonHandler(){
    //console.log("response is: "+usersInfo.length);
    render(tbody,generatePostTemp(userInfo));
}

function clearButtonHandler(){
    console.log("Clear");
    userInfo=[];
    render(tbody,generatePostTemp(userInfo));
}

function deleteButtonHandler(id){
    console.log("delete");
    //update State
    deleteUserData(id);
    //update view
    console.log("userInfo is: "+userInfo.length);
    render(tbody,generatePostTemp(userInfo));
}

//UI Temp
function generatePostTemp(info){
    let resTmp = "";
    //console.log(info);
    info.forEach(user=>{
         //console.log(user);
         resTmp +=`<tr>
         <td>${user.userId}</td>
         <td>${user.id}</td>
         <td>${user.title}</td>
         <td><button class="deleteBtn" id="${user.id}"
         type="button">Delete</button></td>
         </tr>`
        //console.log("restemp: "+ resTmp);
    });
    return resTmp;
}

function render(element,data){
    //console.log("render :" + temp);
    element.innerHTML = data;
}

//fetch data 
async function fetchData(){
    let response = await fetch(url);
    let data = await response.json();
    return data;
 };

 fetchData().then(data=>{
    //console.log("async function"+datas);
    userInfo = data;
    //console.log(usersInfo);
 });

 //business logic
function deleteUserData(id){
    console.log("delete record "+id);
    userInfo = userInfo.filter(user=>{
        console.log("user id is: "+user.id);
        if(user.id == id){
            console.log("inner userid is: "+user.id);
            return false;
        }else{
            return true;
        }
    });
    console.log(userInfo);
}