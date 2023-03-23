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
    p2.textContent = canzone.title_version;

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
    divClock.textContent = canzone.duration;

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

{
  /* <div class="  titoli  d-flex justify-content-between mt-3">
<div class="container-fluid ms-4">
<div class="row ">
              <div class="col-8 col-md-7 col-xl-6 d-flex gap-4 align-items-center ">
                <p class="m-0 d-none d-sm-block">1</p>
                  <div class="">
                    <p class="m-0">DOMENICO</p>
                    <p class="m-0">sottotitolo</p>
                    </div>
                    </div>
                  <div class=" d-none d-sm-flex col-3 col-md-3 col-xl-4 justify-content-center"><p>RIPRODUZIONI</p></div>
                  
                  
                  <div class="d-none d-sm-flex col-1 col-md-2 col-xl-2 justify-content-center clock">00:00</div>
                  <p class="col-4  text-end clock  d-sm-none fs-4"><i class="bi bi-three-dots-vertical"></i></p>
                 

                  
                </div>
           </div>
            </div> */
}
