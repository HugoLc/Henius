export class Jogo{
  const #botoes = [];
  const #card
  let #sequencia = [];
  let #resposta =[];

  constructor(botoes, card){
    this.#botoes = botoes;
    this.#card = card;
  }

  function rodarJogo(){
    let min = 1;
    let max = this.botoes.lenght;
    let gameOn = true;

    while (gameOn) {
      let indice = #gerarRandom(min, max);
      #sequencia.push(indice);
      #mostrarSequencia(this.#sequencia, this.#botoes);
      let resposta = #checarResposta(this.#sequencia, this.#resposta);
      resposta ? gameOn = true : gameOn = false;
    }

    #finalizarJogo();

  }

  function #gerarRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function #mostrarSequencia(seq, bt){
    for (var i = 0; i < seq.length; i++) {
      let numBotao = seq[i];
      switch (numBotao) {
        case 1:
          let botao = bt[0];
          botao.style.opacity = '1';
          tocarSom('som1');
          botao.style.opacity = '0.5';
          break;
        case 2:
          let botao = bt[1];
          botao.style.opacity = '1';
          tocarSom('som2');
          botao.style.opacity = '0.5';
          break;
        case 3:
          let botao = bt[2];
          botao.style.opacity = '1';
          tocarSom('som3');
          botao.style.opacity = '0.5';
          break;
        case 4:
          let botao = bt[3];
          botao.style.opacity = '1';
          tocarSom('som4');
          botao.style.opacity = '0.5';
          break;
        default:
      }
    }
  }

  function #checarResposta(seq, res, bts){
    let click = false;
    // let i = 0;

    for (var i = 0; i < seq.length; i++) {
      card.addEventListener('click', (evento) =>{
        let elemento = evento.target;
        switch (elemento.id) {
          case bts[0].id:
            let botao = bt[0];
            botao.style.opacity = '1';
            tocarSom('som1');
            botao.style.opacity = '0.5';
            res.push(1);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          default:
          case bts[1].id:
            let botao = bt[1];
            botao.style.opacity = '1';
            tocarSom('som2');
            botao.style.opacity = '0.5';
            res.push(2);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          default:
          case bts[2].id:
            let botao = bt[2];
            botao.style.opacity = '1';
            tocarSom('som3');
            botao.style.opacity = '0.5';
            res.push(3);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          default:
          case bts[3].id:
            let botao = bt[3];
            botao.style.opacity = '1';
            tocarSom('som4');
            botao.style.opacity = '0.5';
            res.push(4);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          default:
            click = false;
        }
      });
    }
    return true;
  }

  function #finalizarJogo(){
    //registrar classificação
    alert(`fim de jogo! sua pontuação foi ${this.#sequencia.lenght}`);
  }

  function tocarSom(idSom){
    let som = document.getElementById(idSom);
    som.Play();
  }

}
