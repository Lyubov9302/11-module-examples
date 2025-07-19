// 1 - основий запиту fetch API, 
// - URL запиту
// - обробка респонс з 404
// - встановлюєм ліміт на список який запитуємо

// https://jsonplaceholder.typicode.com/todos

const list = document.querySelector(".todo-list");


const params = new URLSearchParams({
    _limit: 5,
    _page: 1
});

console.log(params);

fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
.then((res) => {

   if (!res.ok) {
     throw new Error(res.status); 
   }

    return res.json();
})

.then(data => {
    console.log("then", data);
    list.insertAdjacentHTML("beforeend", createMarkup(data));
})

.catch(error => {
    console.log("CATCH", error);
})


// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((res) => {

//    if (!res.ok) {
//      throw new Error(res.status); 
//    }

//     return res.json();
// })

// .then(data => {
//     console.log("users", data);
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
// })

// .catch(error => {
//     console.log("CATCH", error);
// })

function createMarkup(todos) {
    return todos.map(({id, title, completed}) => `
  <li data-id="${id}" class="list-item">
  <input type="checkbox" ${completed && "checked"}/>
  <p>${title}</p>
  </li>
    `).join('');
}

// - всередині функції запит, зовні обробка

function foo(url) {
return fetch(url)
.then(result => {
    if(!result.ok) {
        throw new Error(result.status);
    }
    return result.json();
})
}

foo('https://jsonplaceholder.typicode.com/todos')
.then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data))
})

.catch(error => {
    console.log(error);
})

foo('https://jsonplaceholder.typicode.com/users')
.then(data => {
    console.log(data);
})

.catch(error => {
    console.log(error);
})