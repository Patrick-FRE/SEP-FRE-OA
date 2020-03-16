let getTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let result = ``;
      data.forEach(user => {
        const { userId, id, title, completed } = user;
        result += `<div>
                        <h4>User ID: ${userId}</h4>
                        <ul>
                            <li> ID: ${id}</li>
                            <li> title: ${title}</li>
                            <li> completed: ${completed} </li}
                        </ul>
                    </div>`;
        document.getElementById("data").innerHTML = result;
      });
    });
};

let removeTodos = () => {
  document.getElementById("data").remove();
};
