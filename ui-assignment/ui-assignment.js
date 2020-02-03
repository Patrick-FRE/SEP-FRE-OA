

/* function myGetData(url, cb) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(this.responseText);
    }
  };
  xhttp.open("GET", url, true); //"https://jsonplaceholder.typicode.com/posts"
  xhttp.send();
} */
document.onload = ol();
function ol(){
    
var url = "https://jsonplaceholder.typicode.com/posts";
var data=[];



fetch(url).then((res)=>res.json()).then((json)=>{ data = json;}).then(()=>{iterate();}).then(()=>{let body = document.baseURI;console.log(body);}) 




function iterate(){
    
    

    data.forEach((e)=>{
        let newRow = document.createElement("tr"); 
        for(k in e){
            let td = document.createElement("TD");
            let text = document.createTextNode(e[k]);
            td.appendChild(text);
            newRow.appendChild(td);/* .appendChild(document.createTextNode(e[k]))); */
        }
        let tdd = document.createElement("TD");
        let button = document.createElement('BUTTON');
        button.appendChild(document.createTextNode('delete'));
       
        button.addEventListener('click', (event)=>{event.target.parentElement.parentElement.remove()})
        tdd.appendChild(button);

        newRow.appendChild(tdd);

        document.getElementById("table").appendChild(newRow);

    });

    
}
}

/* function addElement () { 

    var newDiv = document.createElement("div"); 

    var newContent = document.createTextNode(JSON.stringify(data)); 

    newDiv.appendChild(newContent);  
  

    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }
} */


  

