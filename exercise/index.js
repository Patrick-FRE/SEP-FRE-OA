let state = {
    message: "show message",
}


document.querySelector("h2").textContent = state.message;

document.querySelector("input").addEventListener("keypress", function(event){
    if(event.which === 13 && this.value !== ""){
       
    }
}.bind(state));