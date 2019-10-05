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
myList = Array(myList)
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
  var last_id=Number(e.id[e.id.length-1]);
  addStyleText=`#li-${last_id}{animation: disolve 1s ease-in 0s 1 normal forwards}`;
  deleteStyleText=`#li-${last_id}{animation: none}`;
  pendingStyle=document.createElement('style');
  pendingStyle.type="text/css";
  pendingStyle.innerText=addStyleText;
  console.log(pendingStyle);
  document.head.appendChild(pendingStyle);

  setTimeout(()=>{
    myList.splice(last_id,1);
    readyList=renderList(myList);
    var htmlList=document.getElementById("list-items");
    htmlList.innerHTML ="";
    htmlList.innerHTML += readyList.join('');
    document.getElementById("header-input-todo").value="";
    pendingStyle.innerText=deleteStyleText;
    document.head.appendChild(pendingStyle);
  },1000);
}