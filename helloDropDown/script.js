var select=document.getElementById('selector');
select.addEventListener('change',(e)=>{
  var showMsg=e.target.value;
  var container=document.getElementById("name-container");
  if (document.getElementById('option-0')){
    var option0=document.getElementById('option-0');
    if(e.target.value===option0.value){
      showMsg=false;
    }
    else{
      showMsg=true;
    }
  }
  if(container.hasChildNodes()){
    console.log(container);
    container.innerHTML="";}
  var newComponent=document.createElement('p');
  var newTextCom=document.createTextNode(`${showMsg?e.target.value:'please input a valid value'}`);
  newComponent.appendChild(newTextCom);
  container.appendChild(newComponent);
})
var btn=document.getElementById('submit');
btn.addEventListener('submit');
