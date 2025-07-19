import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as c}from"./assets/vendor-DGDcxXwr.js";/* empty css                      */const s=document.querySelector(".todo-list");function i(e){return e.map(({title:o,completed:t})=>`
    <li class="list-item">
    <input type="checkbox" ${t&&"checked"}/>
    <p>${o}</p>
    </li>
    `).join("")}c.get("https://jsonplaceholder.typicode.com/todos").then(e=>{console.log(e),s.insertAdjacentHTML("beforeend",i(data))}).catch(e=>{console.log(e.message)});
//# sourceMappingURL=01-axios.js.map
