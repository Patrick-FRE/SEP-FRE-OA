//Column titles of the table
let data = [
    { userId: " ", id: " ", title:" ", body:" "}
];

//function to generate table head
function generateTableHead(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

//function to generate a table
function generateTable(table,data){
    for(let element of data){
        let row = table.insertRow();
        for(key in element){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

//request function
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      //parse the object
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse((this.responseText));
        //get the first values of the object (title)
        var title = Object.keys(obj[0]);
        //create a row
        var row = document.createElement("TR");
        
        //insert the first values in the row
        title.forEach(item=>{
            cell = row.insertCell();
            cell.innerHTML = item;
        })
        //insert the row into the table
        document.getElementById("myTable").appendChild(row);
        /*get the values of the object and repeat the process above,
        by inserting cell by cell*/
        obj.forEach(user => {
            var val = Object.values(user);
            var row = document.createElement("TR");
            row.id = user.id;

            val.forEach(item=>{
                cell = row.insertCell();
                cell.innerHTML = item;
            })
            //create a new cell
            cell = row.insertCell();
            //insert the delete button in every cell
            cell.innerHTML = "<Button>delete</Button>";
            //delete the row when the delete button is clicked
            cell.onclick = function(){
                document.getElementById("myTable").removeChild(row);
            }            
            //put the row into the table
            document.getElementById("myTable").appendChild(row);
        });
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
  }
loadDoc();  
