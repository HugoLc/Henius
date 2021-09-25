import Jogo from '../js/jogo.js'; 
import InfoCard from '../js/info-card.js'

const infoParagrafo = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec consequat, purus at consequat dapibus, ipsum lectus
  pellentesque arcu, ut ultricies nibh metus vitae nisi. Donec facilisi
  s ullamcorper leo a iaculis. Duis rhoncus euismod arcu, elementum
  ultricies libero consequat ultricies. Nam sit amet mi convallis, faci
  lisis felis ut, pharetra massa. Cras non lacus et lorem aliquet fau
  cibus et eu ipsum. Nunc ultrices massa ut felis cursus, et scelerisque augue laoreet. I
  nteger el
`;
var infoCard = new InfoCard(infoParagrafo);

const box = document.querySelector('#id-box')
const collection = document.getElementsByClassName('botao-cor'); //gera uma coleção de elementos
const botoes = Array.from(collection); // transforma essa coleção em array.

// testeGetXHR();
// testePostXHR();



let rodando = false; // variavel para bloquear um segundo acionamento do jogo

// INSTANCIAR JOGO E ADICIONAR UM EVENT LISTENER CLICK PARA INICIAR O JOGO
const jogo = new Jogo(botoes, box);

document.addEventListener('click', () => {
  if(infoCard) {infoCard.excluirInfoCard();}
  infoCard = null; 
  
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
