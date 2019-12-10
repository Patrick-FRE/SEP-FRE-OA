//configuration
const url='https://jsonplaceholder.typicode.com/posts';

//State
let usersInfo=[];

//fetch data from endpoint
async function fetchData(){
    let response = await fetch(url);
    let datas = await response.json();
   return datas;
 };

 fetchData().then(datas=>{
    //console.log("async function"+datas);
    usersInfo = datas;
    console.log(usersInfo);
 });



//Model


//DOM element
let fetchButton = document.querySelector("#fetchData");
let clearButton = document.querySelector("#clearData");
let tbody = document.querySelector("#post-table-content");


//UI Template
function generatePostTpm(records){
    //console.log("generate temp"+records);
    let resTmp = "";
    console.log(records);
    records.forEach(user=>{
        //console.log(user);
         resTmp +=`<tr><td>${user.userId}</td>
         <td>${user.title}</td>
         <td>${user.body}</td>
         <td><button class="btnDelete" id="btn-${user.id}"
         type="button">Delete</button></td></tr>`
    
    //console.log("restemp: "+ resTmp);
    });
    
    return resTmp;

};

function render(rootElement,temp){
    //console.log("render :"+temp);
    rootElement.innerHTML = temp;
}


//event handler
function handlerClickFetchButton(){
    console.log("response is: "+usersInfo.length);
    render(tbody,generatePostTpm(usersInfo));
}

function handleClickDeleteButton(id){
    console.log("delete");
    //update State
    deleteUserData(id);
    //update view
    console.log("userInfo is: "+usersInfo.length);
    render(tbody,generatePostTpm(usersInfo));
}


function handlerClickClearButton(){
    console.log("Clear");
    usersInfo=[];
    render(tbody,generatePostTpm(usersInfo));
}


//Setup Event
eventSetup();

function eventSetup(){
    //click fetch button
    fetchButton.addEventListener("click",handlerClickFetchButton);
    //click clear button
    clearButton.addEventListener("click",handlerClickClearButton);
    //click Delete button
    tbody.addEventListener("click",()=>{
        if(event.target.className === 'btnDelete'){
            handleClickDeleteButton(event.target.id.substring(4));
        }
    });
}


//business login
function deleteUserData(id){
    console.log("delete record "+id);
    usersInfo = usersInfo.filter(user=>{
        console.log("user id is: "+user.id);
        if(user.id == id){
            console.log("inner userid is: "+user.id);
            return false;
        }else{
            //console.log("else statement");
            return true;
        }
    });
    console.log(usersInfo);
}