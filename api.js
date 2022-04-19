function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
}
function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(json => console.log(json))
}