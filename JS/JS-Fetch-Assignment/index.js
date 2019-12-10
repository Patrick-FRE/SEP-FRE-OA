function fetchData() {
  var element = document.getElementById("data");
  fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
    res.json().then(data => {
      console.log(data);
      if (data.length > 0) {
        var temp = "";
        data.forEach(u => {
          temp += "<tr>";
          temp += "<td>" + u.userId + "</td>";
          temp += "<td>" + u.title + "</td>";
          temp += "<td>" + u.body + "</td></tr>";
        });
        document.getElementById("data").innerHTML = temp;
      }
    });
  });
  element.classList.remove("newClass");
}

function clearData() {
  var element = document.getElementById("data");
  element.classList.add("newClass");
}
