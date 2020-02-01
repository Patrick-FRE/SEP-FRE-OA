function myGetData(url,callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            callback(this.responseText);
        }
    }
    xhttp.open("GET",url)
    xhttp.send();
}

myGetData("https://jsonplaceholder.typicode.com/posts", parseData);

function parseData(data){
    var myData = JSON.parse(data);
    console.log(myData)
    createRow("myTable","titles",Object.keys(myData[0]));
    myData.forEach(row=>{
        createRowWithButton("myTable",row.id,Object.values(row));
    })
}

function createRow(tableID,rowID,TDs) {
    var row = document.createElement("TR");
    row.setAttribute("id", rowID);
    document.getElementById(tableID).appendChild(row);
    TDs.forEach(d=>{
        cell = document.getElementById(rowID).insertCell();
        cell.innerHTML = d;
    })
}
    
function createRowWithButton(tableID,rowID,TDs){
    createRow(tableID,rowID,TDs);
    cell = document.getElementById(rowID).insertCell();
    cell.innerHTML = "<Button>Delete</Button>";
    cell.onclick = function(){
        document.getElementById(tableID).removeChild(document.getElementById(rowID));
    }
}



  
  

  

