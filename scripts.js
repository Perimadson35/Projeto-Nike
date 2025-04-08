const body = document.querySelector("body");
const tenis = document.querySelector(".imagem-tenis");

// document=html
// queryselector=pegador/selecionador


function mudarVisual(cor, imagem){
    tenis.src= imagem;
    body.style.background=cor

}