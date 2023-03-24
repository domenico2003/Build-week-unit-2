let amici = document.querySelector(".amici");
let offCanvas = document.querySelector(".menùAmici");
let btnClose = document.querySelector(".btn-close");
amici.onclick = () => {
  offCanvas.classList.remove("d-none");
};

btnClose.onclick = () => {
  offCanvas.classList.add("d-none");
};

let input = document.querySelector("#search-input");
let btnDnone = document.querySelector("#btn-d-none");

btnDnone.onclick = () => {
  if (input.classList.contains("d-none")) {
    input.classList.remove("d-none");
  } else {
    input.classList.add("d-none");
  }
};

let nomeAlbumMd = document.getElementById("nome-album-md");
let nomeAlbumSm = document.getElementById("nome-album-sm");
let imgAlbum = document.getElementById("img-album");
let picture = document.getElementById("picture");
let pictureSm = document.getElementById("pictureSm");
let name = document.getElementById("nome-bend");
let nameSm = document.getElementById("nome-bendSm");
let target = document.getElementById("target");
let indice = 0;

let idAlbum = new URLSearchParams(window.location.search).get("id");

fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + idAlbum)
  .then((resp) => resp.json())
  .then((dato) => stampa(dato));

let stampa = (album) => {
  target.textContent = " ";
  nomeAlbumMd.innerText = album.title;
  nomeAlbumSm.innerText = album.title;

  imgAlbum.src = album.cover;
  picture.src = album.artist.picture;
  pictureSm.src = album.artist.picture;

  name.innerText = album.artist.name;
  nameSm.innerText = album.artist.name;
  name.addEventListener("click", () => {
    idSeachArtista(album.artist.name);
  });
  nameSm.addEventListener("click", () => {
    idSeachArtista(album.artist.name);
  });

  album.tracks.data.forEach((canzone) => {
    indice++;

    let contenitore = document.createElement("div");
    contenitore.classList.add(
      "titoli",
      "d-flex",
      "justify-content-between",
      "mt-3"
    );

    let containerFluid = document.createElement("div");
    containerFluid.classList.add("container-fluid", "ms-4");

    let row = document.createElement("div");
    row.classList.add("row");

    let col = document.createElement("div");
    col.classList.add(
      "col-8",
      "col-md-7",
      "col-xl-6",
      "d-flex",
      "gap-4",
      "align-items-center"
    );

    let para = document.createElement("p");
    para.classList.add("m-0", "d-none", "d-sm-block");
    para.textContent = indice;

    let emptyDiv = document.createElement("div");

    let p1 = document.createElement("p");
    p1.classList.add("m-0");
    p1.textContent = canzone.title;

    let p2 = document.createElement("p");
    p2.classList.add("m-0");
    p2.textContent = canzone.artist.name;
    p2.addEventListener("click", () => {
      setTimeout;
      spinner.classList.remove("d-none");
      idSeachArtista(canzone.artist.name);
    });

    let versioniDiv = document.createElement("div");
    versioniDiv.classList.add(
      "d-none",
      "d-sm-flex",
      "col-3",
      "col-md-3",
      "col-xl-4",
      "justify-content-center"
    );

    let emptyP = document.createElement("p");
    emptyP.textContent = canzone.rank;

    let divClock = document.createElement("div");
    divClock.classList.add(
      "d-none",
      "d-sm-flex",
      "col-1",
      "col-md-2",
      "col-xl-2",
      "justify-content-center",
      "clock"
    );
    divClock.textContent = formatTime(canzone.duration);

    let dots = document.createElement("p");
    dots.classList.add("col-4", "text-end", "clock", "d-sm-none", "fs-4");

    let icon = document.createElement("i");
    icon.classList.add("bi", "bi-three-dots-vertical");

    target.appendChild(contenitore);
    contenitore.appendChild(containerFluid);
    containerFluid.appendChild(row);
    row.appendChild(col);
    col.appendChild(para);
    col.appendChild(emptyDiv);
    emptyDiv.appendChild(p1);
    emptyDiv.appendChild(p2);
    row.appendChild(versioniDiv);
    versioniDiv.appendChild(emptyP);
    row.appendChild(divClock);
    row.appendChild(dots);
    dots.appendChild(icon);
  });
};

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

let profilo = document.querySelector("#profilo");

let nomeCognome = JSON.parse(window.localStorage.getItem("datiPersonali"));

profilo.textContent = `${nomeCognome.name} ${nomeCognome.surname}`;

async function idSeachArtista(nomeArtista) {
  let risposta = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${nomeArtista}`
  );
  let dato = await risposta.json();

  let id;
  id = dato.data[0].artist.id;
  // spinner.classList.add("d-none");
  window.location.assign("../artistPage.html?id=" + id);
}
