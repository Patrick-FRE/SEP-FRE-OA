function myFetch(url){
    return new Promise((res, rej) =>{
      var xhttp = new XMLHttpRequest();
      
      xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200) {
              res({
                json: function(){
                  return JSON.parse(xhttp.responseText);
                }
              })
          }
      }
      xhttp.open('GET', url, true);
      xhttp.send();
    })
  }

  myFetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {

        let todos = data.map(({ userId, id, title, completed })=> `<li class="${id}">user: ${ userId }   post id: ${ id }   title: ${ title }   completed: ${ completed }</li>`).join('');
        let app = document.querySelector('#app');
        
        
        let showTodosBtn = document.querySelector(".show-todos-btn");
        showTodosBtn.addEventListener('click', () => {
            app.innerHTML = `<ul>${ todos }</ul>` 
        })

        let removeTodosBtn = document.querySelector('.remove-todos-btn');
        removeTodosBtn.addEventListener('click', () => {
            app.innerHTML = '';
        })
        
    });

  