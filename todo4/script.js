var btn=document.getElementById('btn');
var i=0;
btn.addEventListener('click',()=>{
  i++;
  var input=document.getElementById('input');
  var showMsg=document.getElementById('show');
  var newEle=document.createElement('li');
  newEle.setAttribute('id',`${i}`);
  var newBtn=document.createElement('button');
  newBtn.setAttribute('id',`b${i}`);
  var newText=document.createTextNode(input.value);
  newEle.appendChild(newText);
  newEle.appendChild(newBtn);
  showMsg.insertBefore(newEle,showMsg.childNodes[0]);
});
var show=document.getElementById('show');
show.addEventListener('click',(e)=>{
  var id=e.target.id.slice(1);
  var getLi=document.getElementById(id);
  console.log(getLi);
  getLi.remove();
})