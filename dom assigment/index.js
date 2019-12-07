function request() {
  fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      const userId = json.userId;
      console.log(userId);
      const id = json.id;
      console.log(id, "thisisid");

      const title = json.title;
      const body = json.body;
      document.getElementsByClassName("data")[0].innerHTML = userId;
      document.getElementsByClassName("data2")[0].innerHTML = id;
      document.getElementsByClassName("data")[2].innerHTML = title;
      document.getElementsByClassName("data")[3].innerHTML = body;
    });
}

// request();
