let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");

function mudarVisual(cor, imagem) {
    // Evitar que a animação seja chamada várias vezes antes de terminar a anterior
    if (tenis.classList.contains("troca-efeito")) return;

    // Adicionando o efeito de troca
    tenis.classList.add("troca-efeito");

    // Alterando a cor do fundo
    body.style.background = cor;

    // Após 500ms, alteramos a imagem e removemos o efeito
    setTimeout(() => {
        tenis.src = imagem;
        tenis.classList.remove("troca-efeito");
    }, 500); // Tempo da transição do efeito
}
