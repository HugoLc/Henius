import timer from '/js/misc.js'; // funciona no srv local
//import timer from '/genius/js/misc.js'; // funciona no gh pages

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
      console.log('----');
      console.log(this.#sequencia);

      let seq = await this.#mostrarSequencia(this.#sequencia, this.#botoes);
      let resposta = await this.#checarResposta(this.#sequencia, /*this.#resposta*/ this.#botoes);
      // alert(resposta);
      console.log(this.#sequencia);
      resposta ? gameOn = true : gameOn = false;
    }

    this.#finalizarJogo();
    return false;
  }

  #gerarRandom(min, max){
    return new Promise((resolve) => {
      //setTimeout(()=>{
        min = Math.ceil(min);
        max = Math.floor(max + 1);
        resolve(Math.floor(Math.random() * (max - min)) + min);
      //}, 2000)

    })
  }

  #voltarOpacity(botao, ms){
    return new Promise((resolve)=>{
      setTimeout(()=> {
        botao.style.opacity = '0.5';
        resolve('tempo');
      }, ms);
    })
  }

  #sleeper(ms){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  #mostrarSequencia(seq, bt){
    return new Promise( async (resolve)=>{
      await this.#sleeper(1000);
      for (var i = 0; i < seq.length; i++){
        let numBotao = seq[i];
        //let numBotao = 1;
        let botao;
        let ok;
        switch (numBotao) {
          case 1:
            botao = bt[0];
            await this.#sleeper(200);
            botao.style.opacity = '1';
            this.#tocarSom('#som1');
            ok = await this.#voltarOpacity(botao, 2000);
            break;
          case 2:
            botao = bt[1];
            await this.#sleeper(200);
            botao.style.opacity = '1';
            this.#tocarSom('#som2');
            ok = await this.#voltarOpacity(botao, 2000);
            break;
          case 3:
            botao = bt[2];
            await this.#sleeper(200);
            botao.style.opacity = '1';
            this.#tocarSom('#som3');
            ok = await this.#voltarOpacity(botao, 2000);
            break;
          case 4:
            botao = bt[3];
            await this.#sleeper(200);
            botao.style.opacity = '1';
            this.#tocarSom('#som4');
            ok = await this.#voltarOpacity(botao, 2000);
            break;
          default:
        }
      }
      resolve();
    })
  }

  #checarClick(seq, res, bts, i){
    let resol;

    let block = false; // variavel para bloquear varias entradas de click
    return new Promise((resolve)=> {
      console.log('deu ruim');
      this.#card.addEventListener('click', async (evento) =>{
        if (!block) {
          block = true;
          let elemento = evento.target;
          let botao;
          console.log(elemento.id);
          switch (elemento.id) {
            case bts[0].id:
              console.log('case 1');
              botao = bts[0];
              botao.style.opacity = '1';
              this.#tocarSom('#som1');
              await this.#voltarOpacity(botao, 1000);
              res.push(1);
              console.log(`resposta = ${res}`);
              console.log(`sequencia = ${seq}`);
              res[i] != seq[i] ? resolve(false) : resolve(true);
              break;
            case bts[1].id:
              console.log('case 2');
              botao = bts[1];
              botao.style.opacity = '1';
              this.#tocarSom('#som2');
              await this.#voltarOpacity(botao, 1000);
              res.push(2);
              console.log(`resposta = ${res}`);
              console.log(`sequencia = ${seq}`);
              res[i] != seq[i] ? resolve(false) : resolve(true);
              break;
            case bts[2].id:
              console.log('case 3');
              botao = bts[2];
              botao.style.opacity = '1';
              this.#tocarSom('#som3');
              await this.#voltarOpacity(botao, 1000);
              res.push(3);
              console.log(`resposta = ${res}`);
              console.log(`sequencia = ${seq}`);
              res[i] != seq[i] ? resolve(false) : resolve(true);
              break;
            case bts[3].id:
              console.log('case 4');
              botao = bts[3];
              botao.style.opacity = '1';
              this.#tocarSom('#som4');
              await this.#voltarOpacity(botao, 1000);
              res.push(4);
              console.log(`resposta = ${res}`);
              console.log(`sequencia = ${seq}`);
              res[i] != seq[i] ? resolve(false) : resolve(true);
              break;
            default:
              resolve(i);
          }

        }

      });
    });
  }

  #checarResposta(seq, bts){
    console.log('checagem iniciada');
    //let click = false;
    let i = 0;
    let rsl = true;
    let res = [];
    return new Promise ( async (resolve) => {
      //for (var i = 0; i < seq.length; i++) {
      while (i < seq.length) {
        rsl = await this.#checarClick(seq, res, bts, i);
        if (typeof rsl == 'number') {
          i=i;
        }
        else if (!rsl) {
          break;
        }
        else {
          i++;
        }
        console.log(`rodou ${i} vez`)
      }
      rsl ? resolve(true) : resolve(false);
    });

  }

  #tocarSom(idSom){
    let som = document.querySelector(idSom);
    som.play();
  }

  #getClassificacao(){
    
  }

  #postClassificacao(){
    let file = new XMLHttpRequest();
  }

  #finalizarJogo(){
    //registrar classificação
    alert(`fim de jogo! sua pontuação foi ${this.#sequencia.length}`);
  }
}
