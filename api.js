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
    .then(json => displayUsers(json))
}
function displayUsers(json){
    const ul = document.getElementById('users')
    
    for(const user of json){
        console.log(user)
        const li = document.createElement('li')
        li.innerText = `name: ${user.title} body: ${user.body} `
        ul.appendChild(li);

    }
}
