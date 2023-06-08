let perguntas = document.querySelector('.perguntas')
let itens = [perguntas.children[1].children[0], perguntas.children[1].children[1], perguntas.children[1].children[2]]

itens.forEach(function(elemento) {

    elemento.addEventListener(`click`, () => {

        let itemAtual = document.querySelector(`.ativo`)

        itemAtual.children[0].children[1].children[0].classList.remove(`ativa`)
        itemAtual.children[0].children[1].children[1].classList.remove(`fechada`)
        itemAtual.children[1].classList.remove(`mostrar-txt`)

        if (elemento.classList.contains('ativo') === false) {

            itemAtual.classList.remove(`ativo`)

            elemento.classList.add(`ativo`)

            elemento.children[0].children[1].children[0].classList.add(`ativa`)
            elemento.children[0].children[1].children[1].classList.add(`fechada`)
            elemento.children[1].classList.add(`mostrar-txt`)
        } else {
            
            elemento.children[0].children[1].children[0].classList.add(`ativa`)
            elemento.children[0].children[1].children[1].classList.add(`fechada`)
            elemento.children[1].classList.add(`mostrar-txt`)
        }     
    })
})