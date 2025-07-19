import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const c="http://api.weatherapi.com/v1",o="e924fd8ce48845e1a0b110735251707",i=document.querySelector(".js-search-form"),n=document.querySelector(".js-list");i.addEventListener("submit",h);function h(t){t.preventDefault();const{city:a,days:r}=t.currentTarget.elements;l(a.value,r.value).then(e=>{console.log(e),n.innerHTML=u(e.forecast.forecastday)}).catch(e=>{n.innerHTML=`<h3>${e.message}</h3>`}).finally(()=>{t.target.reset()})}function l(t="",a=1){const r=new URLSearchParams({key:o,q:t,days:a,lang:"uk"});return fetch(`${c}/forecast.json?${r}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function u(t){return t.map(({date:a,day:{avgtemp_c:r,condition:{icon:e,text:s}}})=>`
        <li class="weather-card>
        <img src="${e}" alt="${s}" class="weather-icon"/>
        <h2 class=""weather-date">${a}</h2>
        <h3 class="weather-text">${s}</h3>
        <h3 class="temperature">${r}°C</h3>
        </li>

        `).join("")}
//# sourceMappingURL=11-practice.js.map
