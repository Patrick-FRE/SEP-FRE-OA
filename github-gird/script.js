var gridFather=document.getElementById("grid-holder");
console.log(gridFather);
for(let i=0; i< 365; i++){
  addonDiv=`<div><div id="${i}"></div></div>`;
  gridFather.innerHTML += addonDiv;
}

gridFather.addEventListener("click",(e)=>{
  console.log(e);
  console.log(e.target.id);
  var id= e.target.id;
  console.log(id);
  var thatDay=document.getElementById(id);
  thatDay.style.backgroundColor="green";
})