import timer from '/js/misc.js';

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
    for (var i = 0; i < 10; i++) {
      console.log(i);
      timer(1);
    }
  }
  async rodarJogo(){
    let min = 1;
    let max = this.#botoes.length;
    let gameOn = true;

    while (gameOn) {
      let indice = await this.#gerarRandom(min, max);
      this.#sequencia.push(indice);
      // alert(this.#sequencia);
      let ok = await this.#mostrarSequencia(this.#sequencia, this.#botoes);
      // alert(ok);
      let resposta = this.#checarResposta(this.#sequencia, this.#resposta);
      resposta ? gameOn = true : gameOn = false;
    }

    this.#finalizarJogo();

  }

  #gerarRandom(min, max){
    return new Promise((resolve) => {
      setTimeout(()=>{
        min = Math.ceil(min);
        max = Math.floor(max + 1);
        resolve(Math.floor(Math.random() * (max - min)) + min);
      }, 2000)

    })
  }

  #timeOut(botao){
    return new Promise((resolve)=>{
      setTimeout(()=> {
        botao.style.opacity = '0.5';
        console.log('eu');
        resolve('tempo');
      }, 2000);
    })
  }

  #mostrarSequencia(seq, bt){
    return new Promise( async (resolve)=>{
      // setTimeout(()=>{
        for (var i = 0; i < seq.length; i++){
          console.log(i);
          let numBotao = seq[i];
          //let numBotao = 1;
          let botao;
          let ok;
          switch (numBotao) {
            case 1:
              botao = bt[0];
              botao.style.opacity = '1';
              this.#tocarSom('#som1');
              // setTimeout(()=> {botao.style.opacity = '0.5';}, 2000);
              ok = await this.#timeOut(botao);
              console.log(ok);
              break;
            case 2:
              botao = bt[1];
              botao.style.opacity = '1';
              this.#tocarSom('#som2');
              ok = await this.#timeOut(botao);
              console.log(ok);
              break;
            case 3:
              botao = bt[2];
              botao.style.opacity = '1';
              this.#tocarSom('#som3');
              ok = await this.#timeOut(botao);
              console.log(ok);
              break;
            case 4:
              botao = bt[3];
              botao.style.opacity = '1';
              this.#tocarSom('#som4');
              ok = await this.#timeOut(botao);
              console.log(ok);
              break;
            default:
          }
        }
        resolve('32');
      // }, 2000);


    })
  }

  #checarResposta(seq, res, bts){
    let click = false;
    // let i = 0;

    for (var i = 0; i < seq.length; i++) {
      // alert('entrei');
      card.addEventListener('click', (evento) =>{
        let elemento = evento.target;
        let botao;
        switch (elemento.id) {
          case bts[0].id:
            botao = bt[0];
            botao.style.opacity = '1';
            this.#tocarSom('#som1');
            botao.style.opacity = '0.5';
            res.push(1);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          case bts[1].id:
            botao = bt[1];
            botao.style.opacity = '1';
            this.#tocarSom('#som2');
            botao.style.opacity = '0.5';
            res.push(2);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          case bts[2].id:
            botao = bt[2];
            botao.style.opacity = '1';
            this.#tocarSom('#som3');
            botao.style.opacity = '0.5';
            res.push(3);
            if (res[i] != seq[i]) {
              return false;
            }
            break;
          case bts[3].id:
            botao = bt[3];
            botao.style.opacity = '1';
            this.#tocarSom('#som4');
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

  #tocarSom(idSom){
    let som = document.querySelector(idSom);
    som.play();
  }

}
