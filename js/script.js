const emojis = document.querySelector(".emojisDica");

const quiz = [

    {
        emojisOpcao: '🚗🚗🚗',
        gabarito1: 'carros',
    },

    {
        emojisOpcao: '😱🔪💀',
        gabarito1: 'pânico',
        gabarito2: 'panico',
    },

    {
        emojisOpcao: '🚢💥🧊🚣‍♀️🙋🆘',
        gabarito1: 'titanic',
    },

    {
        emojisOpcao: '😠🚪🔪🛀',
        gabarito1: 'psicose',
    },

    {
        emojisOpcao: '💵🥧',
        gabarito1: 'american pie',
    },

    {
        emojisOpcao: '🐘👂',
        gabarito1: 'dumbo',
    },

    {
        emojisOpcao: '🌕🚲👽👉👈',
        gabarito1: 'e.t',
        gabarito2: 'et',
    },

    {
        emojisOpcao: '✈️🌊😶🏐',
        gabarito1: 'náufrago',
        gabarito2: 'naufrago',
    },

    {
        emojisOpcao: '👦🐳🌊',
        gabarito1: 'free willy',
    },

    {
        emojisOpcao: '🐝🎥',
        gabarito1: 'bee movie',
    },

    
    {
        emojisOpcao: '🏠🎈👴👦',
        gabarito1: 'up',
        gabarito2: 'up altas aventuras',
    },

    {
        emojisOpcao: '🐯🐍🐵🐼👊',
        gabarito1: 'kung fu panda',
    },

    {
        emojisOpcao: '🌍🐒🐵🦧',
        gabarito1: 'planeta dos macacos',
    },

    {
        emojisOpcao: '👴💍💍💍',
        gabarito1: 'senhor dos anéis',
        gabarito2: 'o senhor dos anéis',
    },

    {
        emojisOpcao: '🔍🐠',
        gabarito1: 'procurando nemo',
    },

    {
        emojisOpcao: '👽😎😎',
        gabarito1: 'mib',
        gabarito2: 'mib homens de preto',
    },

    {
        emojisOpcao: '👨‍👩‍👧‍👦✈️➡️👦🏠',
        gabarito1: 'esqueceram de mim',
    },

    {
        emojisOpcao: '🚗💨😡',
        gabarito1: 'velozes e furiosos',
    },

    {
        emojisOpcao: '🎡🦖🦕',
        gabarito1: 'jurassic park',
        gabarito2: 'parque dos dinossauros',
    },

    {
        emojisOpcao: '🚪🦁🧙‍♀️',
        gabarito1: 'nárnia',
        gabarito2: 'as crônicas de nárnia',
    },

    {
        emojisOpcao: '👬🔎👻👻',
        gabarito1: 'os caça fantasmas',
    },

    {
        emojisOpcao: '👧🤮✝️⛪',
        gabarito1: 'o exorcista',
    },

    {
        emojisOpcao: '🍊👩‍🔧🦿',
        gabarito1: 'laranja mecânica',
    },

    {
        emojisOpcao: '🕛😴💭😨',
        gabarito1: 'a hora do pesadelo',
    },

    {
        emojisOpcao: '🧔🎤🌂🌧️',
        gabarito1: 'cantando na chuva',
    },

    {
        emojisOpcao: '🚀👩‍🚀👽',
        gabarito1: 'alien',
    },

    {
        emojisOpcao: '🧔🍺🚫👰',
        gabarito1: 'se beber não case',
    },

    {
        emojisOpcao: '👨🕷️',
        gabarito1: 'homem aranha',
        gabarito2: 'spider man',
    },

    {
        emojisOpcao: '🏍️🔥👻',
        gabarito1: 'motoqueiro fantasma',
    },

    {
        emojisOpcao: '👩🐈',
        gabarito1: 'mulher gato',
    },

    {
        emojisOpcao: '👑🦁',
        gabarito1: 'o rei leão',
    },

    {
        emojisOpcao: '👰💀',
        gabarito1: 'noiva cadáver',
    },

    {
        emojisOpcao: '🚖',
        gabarito1: 'táxi',
    },

    {
        emojisOpcao: '🎎🗡️🐉🎏',
        gabarito1: 'mulan',
    },

    {
        emojisOpcao: '👱‍♂️👑👗👠🏰',
        gabarito1: 'cinderela',
    },

    {
        emojisOpcao: '👩🏻🍎😴',
        gabarito1: 'branca de neve',
    },

    {
        emojisOpcao: '👩🏻👑🐸',
        gabarito1: 'a princesa e o sapo',
    },

    {
        emojisOpcao: '🤫🦋',
        gabarito1: 'o silêncio dos inocentes',
    },

    {
        emojisOpcao: '👱‍♂️👴🚗💨🔙⏳',
        gabarito1: 'de volta para o futuro',
    },

    {
        emojisOpcao: '🗽🦁🦓🚢🏝️',
        gabarito1: 'madagascar',
    },

];

let slide;
let respostaCorreta = '';
let contadorPontos = 0;

const navigation = () => {

    slide = Math.floor(Math.random() * (quiz.length));

    emojis.innerHTML = `<span class="emojis">${quiz[slide].emojisOpcao}</span>`;
    respostaCorreta_1 = `${quiz[slide].gabarito1}`;
    respostaCorreta_2 = `${quiz[slide].gabarito2}`;

}

navigation();

/*************************************************/

const conteiner = document.getElementById("conteiner");
const telaInicio = document.getElementById("telaInicio");
const telaPontos = document.getElementById("telaResultados");
const telaSobre = document.getElementById("telaSobre");
const campoResposta = document.getElementById("respostaUsuario");
const somClock = document.getElementById("somClock");
const timerCont = document.getElementById("timerCont");
const conteinerTimer = document.getElementById("conteinerTimer");

let valorTempo = 20;

function iniciarQuiz() {

    comecarTimer(valorTempo);

    somClock.currentTime = 0.40;
    somClock.play();

    conteiner.style.display = 'grid';
    telaInicio.style.display = 'none';
    campoResposta.focus();

}

function mostrarSobre() {

    telaInicio.style.display = 'none';
    telaSobre.style.display = 'grid';

}

function telaResultados() {

    conteiner.style.display = 'none';
    telaPontos.style.display = 'grid';
    document.getElementById("exibirPontos").innerHTML = (contadorPontos);

    somClock.pause();

    if (contadorPontos == 10) {

        document.getElementById("emojiPontos").innerHTML = '😭';

    } else if (contadorPontos > 0 && contadorPontos <= 30) {

        document.getElementById("emojiPontos").innerHTML = '😔';

    } else if (contadorPontos > 30 && contadorPontos <= 50) {

        document.getElementById("emojiPontos").innerHTML = '😐';

    } else if (contadorPontos > 50 && contadorPontos <= 80) {

        document.getElementById("emojiPontos").innerHTML = '😀';

    } else if (contadorPontos > 80 && contadorPontos <= 100) {

        document.getElementById("emojiPontos").innerHTML = '😁';

    } else if (contadorPontos > 100 && contadorPontos <= 150) {

        document.getElementById("emojiPontos").innerHTML = '🤩';

    } else if (contadorPontos > 150) {

        document.getElementById("emojiPontos").innerHTML = '🤯';

    }

}

/*****************************************************/

const somCheck = document.getElementById("somCheck");

function verificaResposta() {

    if(document.getElementById("respostaUsuario").value == '') {

        campoResposta.focus();

    } else if(document.getElementById("respostaUsuario").value.toLowerCase() == respostaCorreta_1 || document.getElementById("respostaUsuario").value.toLowerCase() == respostaCorreta_2) {

        contadorPontos += 10;

        if (contadorPontos == 200) {

            telaResultados();
        
        } else {

            clearInterval(contador);
            comecarTimer(valorTempo);

            navigation();
            campoResposta.focus();
            campoResposta.style.borderColor = '#D1CCCC';
            document.getElementById("respostaUsuario").value = '';

            somCheck.currentTime = 0.25;
            somCheck.play();

        }

    } else {

        document.getElementById("respostaUsuario").value = '';
        campoResposta.focus();
        campoResposta.style.borderColor = '#e74c3c';

    }

}

/*************************************************************/

document.addEventListener('keypress', function(e){

    if(e.which == 13){
       
        verificaResposta();

    }

 }, false);

 /************************************************************/

function somClick () {

        const somClick = document.getElementById("somClick");
        somClick.currentTime = 0.20;
        somClick.play();

}

/************************************************************/

let contador;

function comecarTimer(time) {

    contador = setInterval(timer, 1000);

    function timer() {

        conteinerTimer.style.color = '#35352C';
        timerCont.textContent = time;
        time--;

        if (time < 10) {

            conteinerTimer.style.color = '#e74c3c';

        } 

        if (time == 0) {

            telaResultados();

        }

    }

}
