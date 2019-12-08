function request() {
  clearTable();
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(
      json => makeTable(json)
      //   console.log(json);
      //   const userId = json.userId;
      //   const id = json.id;
      //   const title = json.title;
      //   const body = json.body;
      //   document.getElementsByClassName("data")[0].innerHTML = userId;
      //   document.getElementsByClassName("data")[1].innerHTML = id;
      //   document.getElementsByClassName("data")[2].innerHTML = title;
      //   document.getElementsByClassName("data")[3].innerHTML = body;
    );
}

function makeTable(dataSet) {
  const table = document.createElement("table");
  document.getElementById("tableSet").appendChild(table);
  const headerMaster = document.createElement("tr");
  const header1 = document.createElement("th");
  const header2 = document.createElement("th");
  const header3 = document.createElement("th");
  const header4 = document.createElement("th");
  //   const userId = dataSet.userId;
  //   const id = dataSet.id;
  //   const title = dataSet.title;
  //   const body = dataSet.body;
  header1.innerText = "userId";
  header2.innerText = "id";
  header3.innerText = "title";
  header4.innerText = "body";
  headerMaster.appendChild(header1);
  headerMaster.appendChild(header2);
  headerMaster.appendChild(header3);
  headerMaster.appendChild(header4);
  table.appendChild(headerMaster);

  for (let i = 0; i < dataSet.length; i++) {
    const row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    // console.log(dataSet, "dataset");
    td1.innerText = dataSet[i].userId;
    td2.innerText = dataSet[i].id;
    td3.innerText = dataSet[i].title;
    td4.innerText = dataSet[i].body;

    // for (let j = 0; j < 4; j++) {
    //     // const cell = document.createElement("td");
    //     cells.userId = document.createElement('td')

    // }
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    table.appendChild(row);
  }
}
function clearTable() {
  const dataSet = document.getElementById("tableSet");
  while (dataSet.firstChild) {
    dataSet.innerText = "";
  }
}
