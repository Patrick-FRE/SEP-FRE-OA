var buttonElement=document.getElementById("add-button");
buttonElement.addEventListener('click' ,()=>{
  var myValue=document.getElementById("header-input-todo").value;
  addItem(myValue,myList);
  readyList=renderList(myList);
  var htmlList=document.getElementById("list-items");
  htmlList.innerHTML ="";
  htmlList.innerHTML += readyList.join('');
  document.getElementById("header-input-todo").value="";
});

var inputElement=document.getElementById("header-input-todo");
inputElement.addEventListener('keypress',(e)=>{
  if (e.keyCode===13){
    var myValue=document.getElementById("header-input-todo").value;
    addItem(myValue,myList);
    readyList=renderList(myList);
    var htmlList=document.getElementById("list-items");
    htmlList.innerHTML = "";
    htmlList.innerHTML += readyList.join('');
    document.getElementById("header-input-todo").value="";
  }
})

var myList=[];
myList = Array(myList);
var doneList=[];
doneList=Array(doneList);

function addItem(value, myList){
  myList.unshift(value)
}

function renderList(myList){
  readyList=new Array(myList.length);
  for (let i=0;i<myList.length-1;i++){
    readyList[i]=`<li id="li-${i}">`+myList[i]+`<button onclick="handleRemove(this)" id="remove-${i}">delete</button>`+"</li>"
  }
  return readyList
}

function handleRemove(e){
  var last_id=Number(e.id.slice(7));
  console.log(e);
  // add exit style
  addStyleText=`#li-${last_id}{animation: disolve 1s ease-in 0s 1 normal forwards}`;
  deleteStyleText=`#li-${last_id}{animation: none}`;
  pendingStyle=document.createElement('style');
  pendingStyle.type="text/css";
  pendingStyle.innerText=addStyleText;
  document.head.appendChild(pendingStyle);
  //get element in mylist and store in doneList
  doneList.push("<li>"+myList[last_id]+"</li>");
  


  setTimeout(()=>{
    //delete method
    myList.splice(last_id,1);
    readyList=renderList(myList);
    var htmlList=document.getElementById("list-items");
    htmlList.innerHTML ="";
    htmlList.innerHTML += readyList.join('');
    document.getElementById("header-input-todo").value="";
    pendingStyle.innerText=deleteStyleText;
    document.head.appendChild(pendingStyle);
    //render donelist to the page
    var done=document.getElementById("done-list");
    done.innerHTML = doneList.join("");
  },1000);
}