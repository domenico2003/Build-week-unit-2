let amici = document.querySelector(".amici")
let offCanvas= document.querySelector(".menùAmici")
let btnClose = document.querySelector(".btn-close")
amici.onclick=()=>{
    offCanvas.classList.remove("d-none")
}

btnClose.onclick=()=>{
    offCanvas.classList.add("d-none")
}





// dinamicità

window.onload=()=>{
    
}
let artisti=document.getElementsByClassName("artista")



for (const artist of artisti) {
    let nomeArtista = artist.childNodes[3].textContent
        let id;
    fetch( `https://striveschool-api.herokuapp.com/api/deezer/search?q=${nomeArtista}`)
        .then(resp=>resp.json())
        .then(dato=>{
            id=dato[0].artist.id
            
        })
    artist.onclick=()=>{
        
        window.location.assign("../artistPage.html?id="+id )
    }
    
}

