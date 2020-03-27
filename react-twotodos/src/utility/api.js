

export const fetchTodos = async () => {
    let response = await fetch('https://us-central1-todos-server.cloudfunctions.net/api/todos/', {
      method:'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1IiwidXNlcm5hbWUiOiJ0ZXN0NSIsInBhc3N3b3JkIjoidGVzdDUiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NDU1NDA5MiwiZXhwIjoxNTg0ODU0MDkyfQ.d_8bsXcX8C7cPfcpsbJsMRklts1o1JifSKJYfmYfz4E `}
    })
    let data = await response.json()
    let todos = data.data.map(d => new model.Todo(d.content));
    state.todoList = [...state.todoList, ...todos]
    console.log('state is', )
    console.log('todos after fetch', state.todoList);
}