const canvas=document.getElementById("canvasComponent");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
window.onresize=function(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
}
const Num=50;


if(canvas.getContext("2d")){
  ctx=canvas.getContext("2d");

};
console.log(ctx);

class myCircle {
  constructor(x, y, v, ctx,r) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.ctx = ctx;
    this.r=r
  }
    drawCircle(st) {
      this.ctx.beginPath();
      this.ctx.globalCompositeOperation='destination-over';
      this.ctx.arc(this.x, this.y, this.r, 0,Math.PI * 2,true);
      this.ctx.fillStyle = st;
      this.ctx.fill();
      this.ctx.closePath();
    };
    update(){
      this.x=this.x+this.v[0];
      this.y=this.y+this.v[1];
    }
    bumpDetection() {
      if (this.x + this.r > canvas.width || this.x - this.r < 0) {
        this.v[0] = -this.v[0];
      }
      if (this.y + this.r > canvas.height || this.y - this.r < 0) {
        this.v[1] = -this.v[0];
      }
    }

}
function randomGenR(){
  return Math.floor(10+Math.random()*20);
}
function randomGenX(){
  return Math.floor(Math.random()*canvas.width);
}
function randomGenY(){
  return Math.floor(Math.random()*canvas.height);
}
function randomSpeed(){
  return [Math.floor(Math.random()*10)-5,Math.floor(Math.random()*10)-5]
}

const radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
radgrad.addColorStop(0, '#A7D30C');
radgrad.addColorStop(0.9, '#019F62');
radgrad.addColorStop(1, 'rgba(1,159,98,0)');

const radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
radgrad2.addColorStop(0, '#FF5F98');
radgrad2.addColorStop(0.75, '#FF0188');
radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

const radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
radgrad3.addColorStop(0, '#00C9FF');
radgrad3.addColorStop(0.8, '#00B5E2');
radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

const radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
radgrad4.addColorStop(0, '#F4F201');
radgrad4.addColorStop(0.8, '#E4C700');
radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
const testStyle="red";

let objectsArray=[];
for (let i=0; i<Num; i++){
  objectsArray.push(new myCircle(randomGenX(),randomGenY(),randomSpeed(),ctx,randomGenR()))
}
objectsArray[0].drawCircle(radgrad);
console.log(objectsArray[0])
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i=0;i<Num;i++){
    if(i%4===0){
      objectsArray[i].update();
      objectsArray[i].drawCircle(testStyle);
      objectsArray[i].bumpDetection();
    }
    if(i%4===1){
      objectsArray[i].update();
      objectsArray[i].drawCircle(testStyle);
      objectsArray[i].bumpDetection();
    }
    if(i%4===2){
      objectsArray[i].update();
      objectsArray[i].drawCircle(testStyle);
      objectsArray[i].bumpDetection();
    }
    if (i%4===3){
      objectsArray[i].update();
      objectsArray[i].drawCircle(testStyle);
      objectsArray[i].bumpDetection();
    }
  }
}


animate()

  