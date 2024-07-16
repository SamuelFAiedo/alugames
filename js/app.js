function alterarStatus(id) { //Essa função serve para resgatar as informações do jogo na dashboard
    let jogoClicado = document.getElementById(`game-${id}`)
    let imagem = jogoClicado.querySelector(".dashboard__item__img")
    let botao = jogoClicado.querySelector(".dashboard__item__button")

    if (imagem.classList.contains("dashboard__item__img--rented")) { //alterar o status do jogo na dashboard
        imagem.classList.remove("dashboard__item__img--rented")
        botao.classList.remove("dashboard__item__button--return")
        botao.textContent = ("Alugar")
    } else {
        imagem.classList.add("dashboard__item__img--rented")
        botao.classList.add("dashboard__item__button--return")
        botao.textContent = ("Devolver")
    }
}
