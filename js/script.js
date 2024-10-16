const html = document.querySelector('html')
const btFoco = document.querySelector('.app__card-button--foco')
const btCurto = document.querySelector('.app__card-button--curto')
const btLongo = document.querySelector('.app__card-button--longo')
const imagemDestaque = document.querySelector('.app__image')
let alterarTitulo =  document.querySelector('.app__title');
let btRmDestaque = document.querySelectorAll('.app__card-button')
let btAtivarMusica = document.querySelector('#alternar-musica');
let musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;
let tempoDecorridoSegundos = 5;
let btStartPause = document.querySelector('#start-pause')

const contagemRegressiva = ()=>{
    //iniciarTempo()
    tempoDecorridoSegundos -= 1
    console.log("tempo: " + tempoDecorridoSegundos)
}

let intervaloDeExecucao = null;

btAtivarMusica.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})

btFoco.addEventListener('click', ()=>{
    alternarContexto('foco')
    btFoco.classList.add('active');
})
    
btCurto.addEventListener('click', ()=>{
    alternarContexto('descanso-curto')
    btCurto.classList.add('active');
})

btLongo.addEventListener('click', ()=>{
    alternarContexto('descanso-longo')
    btLongo.classList.add('active');
})

function alternarContexto(contexto){
    console.log(contexto)

    btRmDestaque.forEach((botao)=>{
        botao.classList.remove('active')
    });
    

    html.setAttribute('data-contexto', contexto)
    imagemDestaque.setAttribute('src',`imagens/${contexto}.png`)
    
    switch (contexto) {
        case 'foco':
            alterarTitulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            alterarTitulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta.</strong>`
        case "descanso-longo":
            alterarTitulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
        default:
            break;
    }

}

btStartPause.addEventListener('click', contagemRegressiva)

function iniciarTempo(){
    intervaloDeExecucao = setInterval(contagemRegressiva, 1000)
}



