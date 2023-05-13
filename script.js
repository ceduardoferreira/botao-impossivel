function moverBotao() {
    // Obter a largura e altura do botão "não"
    var largura = document.getElementById("nao").offsetWidth;
    var altura = document.getElementById("nao").offsetHeight;

    // Obter a largura e altura do contêiner
    var containerLargura = document.body.clientWidth;
    var containerAltura = document.body.clientHeight;

    // Gerar uma posição aleatória dentro do contêiner
    var novaPosicaoX = Math.floor(Math.random() * (containerLargura - largura));
    var novaPosicaoY = Math.floor(Math.random() * (containerAltura - altura));

    // Definir a nova posição do botão "não"
    document.getElementById("nao").style.left = novaPosicaoX + "px";
    document.getElementById("nao").style.top = novaPosicaoY + "px";
}