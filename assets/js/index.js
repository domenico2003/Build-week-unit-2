let amici = document.querySelector(".amici");
let offCanvas = document.querySelector(".menùAmici");
let btnClose = document.querySelector(".btn-close");
let spinner = document.querySelector(".spinner");

amici.onclick = () => {
  offCanvas.classList.remove("d-none");
};

btnClose.onclick = () => {
  offCanvas.classList.add("d-none");
};

// dinamicità

// artist
let artisti = document.getElementsByClassName("artista");

for (const artist of artisti) {
  let nome = artist.childNodes[3].textContent;

  artist.addEventListener("click", () => {
    spinner.classList.remove("d-none");
    idSeachArtista(nome);
  });
}

async function idSeachArtista(nomeArtista) {
  let risposta = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${nomeArtista}`
  );
  let dato = await risposta.json();

  let id;
  id = dato.data[0].artist.id;
  spinner.classList.add("d-none");
  window.location.assign("../artistPage.html?id=" + id);
}

// album

let albums = document.getElementsByClassName("album-card");

for (const album of albums) {
  let nome = album.querySelector(".titolo").textContent;
  console.log(nome);
  album.addEventListener("click", () => {
    spinner.classList.remove("d-none");
    idSeachAlbum(nome);
  });
}

async function idSeachAlbum(nomeAlbum) {
  let risposta = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${nomeAlbum}`
  );
  let dato = await risposta.json();

  let id;
  id = dato.data[0].album.id;
  console.log(id);
  spinner.classList.add("d-none");
  window.location.assign("../albumPage.html?id=" + id);
}

let profilo = document.querySelector("#profilo");

let nomeCognome = JSON.parse(window.localStorage.getItem("datiPersonali"));

profilo.textContent = `${nomeCognome.name} ${nomeCognome.surname}`;
