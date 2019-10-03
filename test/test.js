const canvas=document.getElementById("component");
console.log(canvas);

if (canvas.getContext){
  var ctx=canvas.getContext('2d');
}
console.log(ctx);

ctx.fillRect(300,50,50,50);