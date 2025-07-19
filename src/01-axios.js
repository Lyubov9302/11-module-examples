import axios from "axios";
import '../common.css';

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




function createMarkup(arr) {
    return arr.map(({title, completed}) => `
    <li class="list-item">
    <input type="checkbox" ${completed && "checked"}/>
    <p>${title}</p>
    </li>
    `).join("");
}

// axios("https://jsonplaceholder.typicode.com/todos")
// .then(res => {
//     console.log(res);
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
// })
// .catch(error => {
//     console.log(error.message);
// })

axios.get("https://jsonplaceholder.typicode.com/todos")
.then(res => {
        console.log(res);
        list.insertAdjacentHTML("beforeend", createMarkup(data));
    })
    .catch(error => {
        console.log(error.message)
    });