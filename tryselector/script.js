var cond=document.getElementById('container');
var que=new Array;
cond.addEventListener('click',(e)=>{
  var thisCon=document.getElementsByTagName('input');
  pushEve(e);
  for(let item of thisCon){
    if(que.includes(item.id)){
      console.log('hi');
      item.checked=true;
    }
    else{
      item.checked=false;
    }
  }
})

function pushEve(eve){
  if(que.length<2){
    que.push(eve.target.id);
  }else{
    que.push(eve.target.id);
    que.shift();
  }
  return que;
}

