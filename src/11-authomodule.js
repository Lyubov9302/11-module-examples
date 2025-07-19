

// 2 - авторизація запитів з ключами
// які бувають:
// - у query String
// - у хедерах

// Для прикладу викор https://pixabay.com/api/docs

const API_KEY = "51359701-f6006c27d1fc3647654901390";

const list = document.querySelector(".list");

const params = new URLSearchParams({
    key: API_KEY,
    q: "red rose"
});


fetch(`https://pixabay.com/api?${params}`)
.then(res => {
    if(!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json();
})
.then(data => {
    console.log(data);
    list.insertAdjacentHTML("beforeend", createMarkup(data.hits))
})
.catch(error => {
    console.log(error.message);
})

function createMarkup(arr) {
    return arr.map(({previewURL, tags}) => `
  <li>
  <img src="${previewURL}" alt="${tags}" width="300"/>
  </li>
    `).join("");
}


fetch(`https://pixabay.com/api?${params}`, {
    headers: {
        Authorization: `Bearer lalala`
    }
}) 
