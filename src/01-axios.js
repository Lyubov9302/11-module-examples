import axios from "axios";
import './css/styles.css';

// Додаємо та використовуємо бібліотеку https://axios-http.com/
// Робимо рефакторинг
// - Імпорт
// - Запит
// - Метод axios.get
// - Обробка відповіді та помилки

const url = "https://jsonplaceholder.typicode.com/todos";

const list = document.querySelector(".todo-list");

// fetch(url)
// .then(res => {
//     if(!res.ok) {
//         throw new Error("Oops");
//     }
//     return res.json();
// })
// .then(data => {
//     console.log(data);
//     list.insertAdjacentHTML("beforeend", createMarkup(data))
// })
// .catch(error => {
//     console.log(error);
// })




// function createMarkup(arr) {
//     return arr.map(({title, completed}) => `
//     <li class="list-item">
//     <input type="checkbox" ${completed && "checked"}/>
//     <p>${title}</p>
//     </li>
//     `).join("");
// }

// axios("https://jsonplaceholder.typicode.com/todos")
// .then(res => {
//     console.log(res);
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
// })
// .catch(error => {
//     console.log(error.message);
// })

// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then(res => {
//         console.log(res);
//         list.insertAdjacentHTML("beforeend", createMarkup(res.data));
//     })
//     .catch(error => {
//         console.log(error.message)
//     });


// - b 
// Всередині функції запит,
// зовні обробка

const fetchData = (endpoint = "todos") => {
    return axios(`https://jsonplaceholder.typicode.com/${endpoint}`)
}

fetchData()
.then(res => {
    console.log(res.data);
})

.catch(error => {
    console.log(error.message);
})

fetchData("users")
 .then(res => {
    console.log(res.data);
 })
 .catch(error => {
    console.log(error);
 })