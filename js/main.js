//import Jogo from '/genius/js/jogo.js'; // funciona no gh pages
import Jogo from '/js/jogo.js'; // funciona no srv local

const box = document.querySelector('#id-box')
const collection = document.getElementsByClassName('botao-cor'); //gera uma coleção de elementos
const botoes = Array.from(collection); // transforma essa coleção em array.

// testeGetXHR();
// testePostXHR();



let rodando = false; // variavel para bloquear um segundo acionamento do jogo

// INSTANCIAR JOGO E ADICIONAR UM EVENT LISTENER CLICK PARA INICIAR O JOGO
const jogo = new Jogo(botoes, box);

document.addEventListener('click', () => {
  if (!rodando) {
    console.log('jogo iniciado');
    alert('Jogo iniciado! Siga a sequência apresentada.');
    rodando = jogo.rodarJogo();
  }

});

//funções de teste XHR para futuramente implementar uma classificação
function testeGetXHR(){
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

function testePostXHR(){
  const xhr = new XMLHttpRequest();
  let newInfo = {
    "nome": "ingrid",
    "pontos": 2000
  };

  xhr.responseType = 'json';
  // xhr.onreadystatechange = () => {
  //
  //   if(xhr.readyState == 4){
  //     infoJson = xhr.response;
  //     //infoJson = JSON.parse(infoJson);
  //     console.log(infoJson);
  //   }
  // };
  xhr.open("POST", '../rank.json');
  xhr.send(newInfo);

}
