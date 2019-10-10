var btn=document.getElementById('sub');
var i=0;
btn.addEventListener('click',()=>{
  i++;
  var sp=document.getElementById('choose-from');
  var showMsg=document.getElementById('show');
  var newEle=document.createElement('li');
  newEle.setAttribute('id',`${i}`);
  var textN=document.createTextNode( `<li id="${i}">${sp.value}<button id="b${i}">delete</button></li>`);
  console.log(showMsg.childNodes);
  showMsg.insertBefore(textN,showMsg.childNodes[0]);
});