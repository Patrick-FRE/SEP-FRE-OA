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
            deleteButtonHandler(event.target.id.substring(4));
        }
    });
}

//event handler
function fetchButtonHandler(){
    console.log("response is: "+usersInfo.length);
    render(tbody,generatePostTemp(usersInfo));
}

function clearButtonHandler(){
    console.log("Clear");
    usersInfo=[];
    render(tbody,generatePostTemp(usersInfo));
}

function deleteButtonHandler(id){
    console.log("delete");
    //update State
    deleteUserData(id);
    //update view
    console.log("userInfo is: "+usersInfo.length);
    render(tbody,generatePostTemp(usersInfo));
}

//UI Temp
function generatePostTemp(info){
    let resTmp = "";
    console.log(info);
    info.forEach(user=>{
         console.log(user);
         resTmp +=`<tr>
         <td>${user.userId}</td>
         <td>${user.id}</td>
         <td>${user.title}</td>
         <td><button class="deleteBtn" id="btn-${user.id}"
         type="button">Delete</button></td>
         </tr>`
        //console.log("restemp: "+ resTmp);
    });
    return resTmp;
}

function render(rootElement,data){
    //console.log("render :"+temp);
    rootElement.innerHTML = data;
}

//fetch data 
async function fetchData(){
    let response = await fetch(url);
    let data = await response.json();
    return data;
 };

 fetchData().then(data=>{
    //console.log("async function"+datas);
    usersInfo = data;
    console.log(usersInfo);
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