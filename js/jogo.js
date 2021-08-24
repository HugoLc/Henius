export default class Jogo{
  #botoes; // elemento botão
  #card; // elemento card
  #sequencia = [];
  #resposta = [];

  constructor(botoes, card){
    this.#botoes = botoes;
    this.#card = card;
  }

  helloWold(){
    console.log('helloWold');
  }
  rodarJogo(){
    let min = 1;
    let max = this.#botoes.length;
    let gameOn = true;

    while (gameOn) {
      let indice = this.#gerarRandom(min, max);
      this.#sequencia.push(indice);
      this.#mostrarSequencia(this.#sequencia, this.#botoes);
      let resposta = this.#checarResposta(this.#sequencia, this.#resposta);
      resposta ? gameOn = true : gameOn = false;
    }

    this.#finalizarJogo();

  }

  #gerarRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  #mostrarSequencia(seq, bt){
    for (var i = 0; i < seq.length; i++) {
      let numBotao = seq[i];
      let botao;
      switch (numBotao) {
        case 1:
          botao = bt[0];
          botao.style.opacity = '1';
          tocarSom('som1');
          botao.style.opacity = '0.5';
          break;
        case 2:
          botao = bt[1];
          botao.style.opacity = '1';
          tocarSom('som2');
          botao.style.opacity = '0.5';
          break;
        case 3:
          botao = bt[2];
          botao.style.opacity = '1';
          tocarSom('som3');
          botao.style.opacity = '0.5';
          break;
        case 4:
          botao = bt[3];
          botao.style.opacity = '1';
          tocarSom('som4');
          botao.style.opacity = '0.5';
          break;
        default:
      }
    }
  }

  #checarResposta(seq, res, bts){
    let click = false;
    // let i = 0;

    for (var i = 0; i < seq.length; i++) {
      card.addEventListener('click', (evento) =>{
        let elemento = evento.target;
        let botao;
        switch (elemento.id) {
          case bts[0].id:
            botao = bt[0];
            botao.style.opacity = '1';
            tocarSom('som1');
            botao.style.opacity = '0.5';
            res.push(1);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          case bts[1].id:
            botao = bt[1];
            botao.style.opacity = '1';
            tocarSom('som2');
            botao.style.opacity = '0.5';
            res.push(2);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          case bts[2].id:
            botao = bt[2];
            botao.style.opacity = '1';
            tocarSom('som3');
            botao.style.opacity = '0.5';
            res.push(3);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          case bts[3].id:
            botao = bt[3];
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

  #finalizarJogo(){
    //registrar classificação
    alert(`fim de jogo! sua pontuação foi ${this.#sequencia.length}`);
  }

  tocarSom(idSom){
    let som = document.getElementById(idSom);
    som.Play();
  }

}
