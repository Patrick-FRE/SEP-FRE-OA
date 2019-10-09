var container=document.getElementById("main-container");
for (let i=0; i< 5; i++){
  let insideDiv=document.createElement('div');
  insideDiv.setAttribute('id', `inside-${i}`);
  let insideText=document.createTextNode(`this is the ${i}th element`);
  insideDiv.appendChild(insideText);
  container.appendChild(insideDiv);
}
                                                                          
 container.addEventListener('click',(e)=>{
  console.log(e);
  if (container.style.visibility ==='hidden'){
    container.style.visibility='visible';

  }else{
    container.style.visibility='hidden';
  }
})