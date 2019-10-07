var bar=document.getElementById("loading-bar");
ctx=bar.getContext('2d');
console.log(ctx);
class barCanvas{
  constructor(ctx){
    this.x=undefined;
    this.y=undefined;
    this.endx=undefined;
    this.endy=undefined;
    this.parentx=undefined;
    this.parenty=undefined;
    this.ctx=ctx;
    this.drawx=0;
  }
  getedge(){
    this.x=Number(this.ctx.canvas.parentElement.clientLeft)+20;
    this.y=Number(this.ctx.canvas.parentElement.clientTop)+30;
    this.parentx=this.ctx.canvas.parentElement.clientWidth;
    this.parenty=this.ctx.canvas.parentElement.clientHeight;
    this.endx=Number(this.parentx)-30;
    this.endy=this.y+30;
  }
  drawBar(){
    this.getedge();
    this.ctx.beginPath();
    this.ctx.globalCompositeOperation='destination-over';
    this.ctx.strokeRect(this.x, this.y, this.endx, this.endy-this.y);
    this.ctx.fillRect(this.x+10,this.y+10,this.drawx,this.endy-this.y-20);
    this.ctx.closePath();
    console.log(this.drawx);
  }
  update(){
    if (this.x+this.drawx<=this.endx-10){
      this.drawx += 1;
    }
    else{
      this.drawx=this.drawx;
    }
  }
  clearContext(){
    this.ctx.clearRect(this.x, this.y, this.endx, this.endy-this.y);
  }
}

var barElement=new barCanvas(ctx);
var i=0
function animate(){
  i++;
  requestAnimationFrame(animate);
  if ((i%10)==0){
    barElement.clearContext();
    barElement.drawBar();
    barElement.update();
  }
  if (i>2000){
    i=0;
  }
}
animate();