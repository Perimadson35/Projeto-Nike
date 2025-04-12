let body = document.querySelector("body")
let imagemTenis = document.querySelector(".imagem-tenis")
let botaoCarrinho = document.querySelector(".botao-carrinho")

// document = html
// querySelector = pegador / selecionador

function mudarVisual(cor, imagem, corBotao){
    imagemTenis.classList.add("troca-efeito")

    body.style.background = cor
    
    botaoCarrinho.style.background = corBotao

    // contador de tempo
    setTimeout(() =>{
        imagemTenis.src = imagem
        imagemTenis.classList.remove("troca-efeito")
    }, 500)

    // 1000 milisegundos = 1segundo
}