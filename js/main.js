import Jogo from '/js/jogo.js';


const box = document.querySelector('#id-box')
// const botao = document.querySelector('.botao-cor'); seleciona o primeiro elemento que aparecer
const collection = document.getElementsByClassName('botao-cor');
const botoes = Array.from(collection);


// alert();
// INSTANCIAR JOGO E ADICIONAR UM EVENT LISTENER CLICK PARA INICIAR O JOGO
const jogo = new Jogo(botoes, box);

document.addEventListener('click', () => {
  jogo.rodarJogo();
});
