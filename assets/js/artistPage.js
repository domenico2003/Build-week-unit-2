let amici = document.querySelector(".amici")
let offCanvas= document.querySelector(".menùAmici")
let btnClose = document.querySelector(".btn-close")
amici.onclick=()=>{
    offCanvas.classList.remove("d-none")
}

btnClose.onclick=()=>{
    offCanvas.classList.add("d-none")
}

let input =document.querySelector("#search-input")
let btnDnone=document.querySelector("#btn-d-none")

btnDnone.onclick=()=>{

    if (input.classList.contains("d-none")) {
        input.classList.remove("d-none");
      } else {
        input.classList.add("d-none");
      }
}


