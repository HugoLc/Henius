//import Jogo from '/genius/js/jogo.js'; // funciona no gh pages
import Jogo from '/js/jogo.js'; // funciona no srv local

const box = document.querySelector('#id-box')
// const botao = document.querySelector('.botao-cor'); seleciona o primeiro elemento que aparecer
const collection = document.getElementsByClassName('botao-cor');
const botoes = Array.from(collection);

testeXHR();

let rodando = false;

// console.log(rank);


// alert();
// INSTANCIAR JOGO E ADICIONAR UM EVENT LISTENER CLICK PARA INICIAR O JOGO
const jogo = new Jogo(botoes, box);

document.addEventListener('click', () => {
  if (!rodando) {
    console.log('jogo iniciado');
    // rodando = true;
    rodando = jogo.rodarJogo();
    // alert(rodando);
  }

  // jogo.helloWold();
});

function testeXHR(){
  const xhr = new XMLHttpRequest();
  let infoJson;

  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {

    if(xhr.readyState == 4){
      infoJson = xhr.response;
      //infoJson = JSON.parse(infoJson);
      console.log(infoJson);
    }
  };

  xhr.open('GET', '../rank.json');

  xhr.send();
}
