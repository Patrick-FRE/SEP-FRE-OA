var select=document.getElementById('holder');
var que=[];

select.addEventListener('click',(e)=>{
  pushQ(e);
  select.childNodes.forEach((ele)=>{
    if(!que.includes(ele.id)){
      ele.checked=false;
    }else{
      ele.checked=true;
    }
  })
});

function pushQ(e){
  if(que.length<2){
    que.push(e.target.id)
  }else{
    que.push(e.target.id);
    que.shift();
  }
}
