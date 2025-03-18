'use strict'

const imagens = [
    './img/hokages.webp',
    './img/valefim.jpg'
]

const botaoTrocarImagem = document.querySelector('#trocar-imagem button')
let indiceImagem = 0

function trocarImagem() {
    indiceImagem = (indiceImagem + 1) % imagens.length
    const imagem = imagens[indiceImagem]
    
    document.documentElement.style.setProperty('--imagem-fundo', `url(${imagem})`)
}

botaoTrocarImagem.addEventListener('click', trocarImagem)