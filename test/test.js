var elem=document.getElementById("click-input");
elem.addEventListener('click' , ()=>{
  var styles=`#hello-p{color:red}`;
  var stylesheet=document.createElement("style");
  stylesheet.type="text/css";
  stylesheet.innerText=styles;
  document.head.appendChild(stylesheet);
});