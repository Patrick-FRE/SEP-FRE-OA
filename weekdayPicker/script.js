var datepicker=document.getElementById("date-input");
datepicker.addEventListener('click',(e)=>{
  var dateElement=document.getElementById("choose-from");
  if (dateElement.style.display === "none"){
    dateElement.style.display="flex";
  }else{
    dateElement.style.display = "none";
  }
});
var chooseDate=document.getElementById("choose-from");
chooseDate.addEventListener('click',(e)=>{
  datepicker.value=e.target.text;
})
