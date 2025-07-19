import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{d as t,a as l}from"./assets/vendor-BOKJmoYz.js";/* empty css                      */const n=t.querySelector("#search-form"),m=t.querySelector("#breed-input");t.querySelector("#data-list");const s=t.querySelector("#loader"),d=t.querySelector("#cat-card");n.addEventListener("submit",u);function u(c){c.preventDefault();const a=m.value,r=Array.from(breedsList.options).find(e=>e.value.toLowerCase()===a.toLowerCase());if(!r){alert("Оберіть існуючу породу");return}const o=r.dataset.id;s.classList.remove("hidden"),l(`https://api.thecatapi.com/v1/images/search?breed_ids=${o}`).then(e=>{if(e.data.length>0){const i=e.data[0].url;d.innerHTML=`
    <div class="card">
    <img src="${i}" alt="${a}" class="card-image"/>
    <div class="card-body">
    <h2 class="card-title">${a}</h2>
    </div>
    </div>
    `}else d.innerHTML='<p class=">Зображення не знайдено</p>'}).catch(e=>{console.log(e)}).finally(()=>{s.classList.add("hidden")})}
//# sourceMappingURL=03-practice.js.map
