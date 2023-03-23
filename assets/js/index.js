let amici = document.querySelector(".amici");
let offCanvas = document.querySelector(".menùAmici");
let btnClose = document.querySelector(".btn-close");
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

  window.location.assign("../artistPage.html?id=" + id);
}

// album

let albums = document.getElementsByClassName("album-card");

for (const album of albums) {
  let nome = album.childNodes[3].childNodes[1].textContent;
  console.log(nome);
  album.addEventListener("click", () => {
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
  window.location.assign("../albumPage.html?id=" + id);
}

// album xs

let albumsXs = document.getElementsByClassName("album-card-xs");

for (const albumXs of albumsXs) {
  let nomeXs =
    albumXs.childNodes[1].childNodes[3].childNodes[1].childNodes[3].textContent;
  // console.log(nomeXs);
  albumXs.addEventListener("click", () => {
    idSeachAlbumXs(nomeXs);
  });
}

async function idSeachAlbumXs(nomeAlbumXs) {
  let risposta = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${nomeAlbumXs}`
  );
  let dato = await risposta.json();

  let id;
  id = dato.data[0].album.id;

  console.log(id);
  window.location.assign("../albumPage.html?id=" + id);
}
