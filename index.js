import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const n=document.querySelector(".todo-list"),c=new URLSearchParams({_limit:5,_page:1});console.log(c);fetch(`https://jsonplaceholder.typicode.com/todos?${c}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{console.log("then",o),n.insertAdjacentHTML("beforeend",r(o))}).catch(o=>{console.log("CATCH",o)});function r(o){return o.map(({id:t,title:e,completed:i})=>`
  <li data-id="${t}" class="list-item">
  <input type="checkbox" ${i&&"checked"}/>
  <p>${e}</p>
  </li>
    `).join("")}function s(o){return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}s("https://jsonplaceholder.typicode.com/todos").then(o=>{n.insertAdjacentHTML("beforeend",r(o))}).catch(o=>{console.log(o)});s("https://jsonplaceholder.typicode.com/users").then(o=>{console.log(o)}).catch(o=>{console.log(o)});const l="51359701-f6006c27d1fc3647654901390",h=document.querySelector(".list"),a=new URLSearchParams({key:l,q:"red rose"});fetch(`https://pixabay.com/api?${a}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}).then(o=>{console.log(o),h.insertAdjacentHTML("beforeend",p(o.hits))}).catch(o=>{console.log(o.message)});function p(o){return o.map(({previewURL:t,tags:e})=>`
  <li>
  <img src="${t}" alt="${e}" width="300"/>
  </li>
    `).join("")}fetch(`https://pixabay.com/api?${a}`,{headers:{Authorization:"Bearer lalala"}});
//# sourceMappingURL=index.js.map
