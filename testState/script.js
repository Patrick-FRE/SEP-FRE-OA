var inputTag=document.getElementById("inputTag");
class A{
  constructor(){
    this.info=undefined;
  }
  get change(){
    console.log('get');
    return this.info;

  }
  set change(value){
    console.log('set')
    this.info=value;
  }
}
myA=new A();
inputTag.addEventListener('keypress',(e)=>{
  console.log(e.target.value);
  console.log(A.change);
  console.log(e.targetvalue === A.change);
  if (e.target.value === A.change){

  }else{
    A.change=e.target.value;
    var newDiv=document.createElement('div');
    var t= document.createTextNode(`${A.change}`);
    newDiv.appendChild(t);
    inputTag.appendChild(newDiv);
  }
})