import axios from "axios";

import './css/styles.css';

// - Робимо рефакторинг авторизації запитів з ключами
// -
// - як у axios передавати search params та Headers

// - для прикладу використовуємо https://pixabay.com/api/docs/

const API_KEY ="51359701-f6006c27d1fc3647654901390";

// const params = new URLSearchParams({
//     key: API_KEY,
//     q: "cat"
// }) 

// const list = document.querySelector(".list");



// axios('https://pixabay.com/api/', {
//     // headers: {

//     // }
//     params: {
//         key: API_KEY,
//         q: "cat" 
//     }
// })
// .then(res => {
//     console.log(res);
//     list.insertAdjacentHTML("beforeend", createMarkup(res.data.hits));
// })
// .catch(error => {
//     console.log(error)
// })

// function createMarkup(arr) {
//     return arr.map(({previewURL, tags}) => `
//     <li>
// <img src="${previewURL}" alt="tags" with="300"/>
//     </li>`).join("");
// }




// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/todos";

// axios()
// .then(result => {
//     console.log(result)
// })
// .catch(error => {
//     console.log(error);
// })


// const instance = axios.create({

//     baseURL: "https://jsonplaceholder.typicode.com/"
// })

// instance("todos")
//       .then(res => {
//         console.log(res)
//       })
//       .catch(error => {
//         console.log(error);
//       })
