var check=document.getElementById('check-contain');
var btn=document.getElementById('submit');
var checked=undefined;
btn.addEventListener('click',(e)=>{
  check.childNodes.forEach((element)=>{
    if(element.checked){
      checked=element.value;
    }
  })
  render=document.getElementById('render');
  render.innerHTML=checked;
})
check.addEventListener('click',(e)=>{
  if(true){
    check.childNodes.forEach((ele)=>{
      console.log(ele.value)
      if(ele.value!==e.target.value){
        ele.checked=false;
      }else{
        ele.checked=true;
      }
    })
  }
});