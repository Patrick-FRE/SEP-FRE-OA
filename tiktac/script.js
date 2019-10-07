var container=document.getElementById("checkbox-container");
var display = prompt("please enter the display columns, eg. 3 for 3*3");
var round=0;
display=Number(display);

var innerDiv;
if (display){
  for (let i=0; i<display; i++){
    var dynamicDiv=document.createElement('div');
    dynamicDiv.setAttribute("id",`r${i}`);
    dynamicDiv.setAttribute("class",`rContainer`)
    for (let j=0; j<display;j++){
      var innerDynamicDiv=document.createElement('div');
      innerDynamicDiv.setAttribute("id",`c${i}-${j}`);
      innerDynamicDiv.setAttribute("class","innerBlock");
      dynamicDiv.appendChild(innerDynamicDiv);
    }
    container.appendChild(dynamicDiv);
  }

  container.addEventListener('click',(e)=>{
    var id=e.target.id.slice(1).split('-');
    var row=id[0];
    var col=id[1];

    console.log(e);
    changeStyle1(row,col);

    var playerName=document.getElementById("player-notation");

    if (round%2===0){
      changeStyle1(row,col);
      playerName.innerHTML="";
      playerName.innerHTML=`player 1 turns`;
      round += 1;
    }else{
      changeStyle2(row,col);
      round += 1;
      playerName.innerHTML="";
      playerName.innerHTML=`player 2 turns`;
    }

  });
}

function changeStyle1(row, col){
  var id='c'+row+'-'+col;
  var targetDiv=document.getElementById(id);
  targetDiv.style.backgroundColor='red';
}

function changeStyle2(row,col){
  var id='c'+row+'-'+col;
  var targetDiv=document.getElementById(id);
  targetDiv.style.backgroundColor='green';
}

function drawX(){

};