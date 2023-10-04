// Variaveis 

var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var criaMosquitoTempo = 1500

// painel de iniciar do game

//configurando para mostrar a dificuldade na url


var nivel = window.location.search
nivel = nivel.replace('?', '')

// configuração do select inicial 
function iniciarjogo() {
    var nivel = document.getElementById('nivel').value

    if (nivel === '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href = "app.html?" + nivel
}

//configuração iniciar da dificuldade do game

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'impossivel') {
    criaMosquitoTempo = 650
}

//configuração do painel do jogo

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()
var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {

        window.location.href = 'vitoria.html'
        clearInterval(cronometro)
        clearInterval(criamosquito)
    } else {
        document.getElementById("cronometro").innerHTML = tempo
    }
}, 1000)



// posição random do mosquitos do game

function posicaoRandomica() {

    //remover o moquisto anterior (caso exista)

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

// gera os tamanho aleatorios do mosquitos 

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}
// gera os lados aleatorios do mosquitos 

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}