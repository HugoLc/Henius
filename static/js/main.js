import Jogo from '../js/jogo.js'; 
import InfoCard from '../js/info-card.js'



const infoParagrafo = `
  Projeto realizado com o objetivo de praticar orientação a objetos
  em javascript. Durante o processo de criação, aprendi diversos conceitos
  como construtor de classes, métodos e variáveis privadas, importação e exportação
  de módulos em javascript, métodos síncronos e assíncronos.
  <br><br>
  Trata-se de um jogo baseado no jogo de memória Genius, onde é exibida uma
  sequência aleatória que deve ser seguida, aumentando a cada rodada. Ao final
  será mostrada a pontuação sendo o número de rodadas alcançadas. Futuramente será
  adicionado ao projeto um placar, utilizando conceitos de Backend.
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
