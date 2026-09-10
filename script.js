// troca as abas da galeria

function abrirAba(nomeAba) {

    const conteudos = document.querySelectorAll(".conteudo-aba");
    const botoes = document.querySelectorAll(".aba");

    // esconde as abas
    conteudos.forEach(function (conteudo) {
        conteudo.classList.remove("ativa");
    });

    // tira a seleção dos botões
    botoes.forEach(function (botao) {
        botao.classList.remove("ativa");
    });

    // mostra a aba escolhida
    const aba = document.getElementById(nomeAba);

    if (aba) {
        aba.classList.add("ativa");
    }

    // marca o botão escolhido
    botoes.forEach(function (botao) {

        const texto = botao.textContent.toLowerCase();

        if (
            (nomeAba === "jemg" && texto.includes("jemg")) ||
            (nomeAba === "opis" && texto.includes("opis")) ||
            (nomeAba === "metropolitana" && texto.includes("metropolitana")) ||
            (nomeAba === "lsmb" && texto.includes("liga sul")) ||
            (nomeAba === "federacao" && texto.includes("federação")) ||
            (nomeAba === "copa" && texto.includes("copa")) ||
            (nomeAba === "amistosos" && texto.includes("amistosos")) ||
            (nomeAba === "base" && texto.includes("base")) ||
            (nomeAba === "adulto" && texto.includes("adulta")) ||
            (nomeAba === "pandemia" && texto.includes("pandemia"))
        ) {
            botao.classList.add("ativa");
        }
    });

}


// espera a página carregar

document.addEventListener("DOMContentLoaded", function () {

    console.log("Site da ABAPA carregado!");

});
