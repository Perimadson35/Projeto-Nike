let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")


function mudarVisual(cor, imagem){
    tenis.classList.add("troca-efeito")

    body.style.background=cor

    setTimeout(() => {
        tenis.src = imagem
        tenis.classlist.remove("troca-efeito")
    }, 500);
}