//import sleeper from '/js/misc.js'; // funciona no srv local
import sleeper from '/genius/js/misc.js'; // funciona no gh pages

export default class Jogo{
  #botoes; // array de elementos botão
  #card; // elemento card
  #sequencia = []; //array para guardar a sequencia

  constructor(botoes, card){
    this.#botoes = botoes;
    this.#card = card;
  }

  async rodarJogo(){
    const min = 1; // variável para definir o valor minimo aleatorio (gerarRandom)
    const max = this.#botoes.length; // variável para definir o valor maximo aleatorio (gerarRandom)
    let gameOn = true; //condição para o while rodar

    while (gameOn) {
      //gerar um indice para adicionar à sequencia
      let indice = await this.#gerarRandom(min, max);
      this.#sequencia.push(indice);

      //mostrar a sequencia
      let seq = await this.#mostrarSequencia(this.#sequencia, this.#botoes);
      //checar a resposta
      let resposta = await this.#checarResposta(this.#sequencia, this.#botoes);

      //se houver erro gameOn recebe falso e encerra o loop
      resposta ? gameOn = true : gameOn = false;
    }

    //finaliza o jogo e retorna o valor false para 'rodando'
    this.#finalizarJogo();
    return false;
  }

  //FUNÇÃO PARA GERAR VALOR INTEIRO ALEATORIO ENTRE
  #gerarRandom(min, max){
    return new Promise((resolve) => {
        min = Math.ceil(min);
        max = Math.floor(max + 1);
        resolve(Math.floor(Math.random() * (max - min)) + min);

    })
  }

  //FUNÇÃO PARA VOLTAR A OPACIDADE DO ELEMENTO
  //APÓS DETERMINADO TEMPO
  #voltarOpacity(botao, ms){
    return new Promise((resolve)=>{
      setTimeout(()=> {
        botao.style.opacity = '0.5';
        resolve();
      }, ms);
    })
  }

  //FUNÇÃO PARA MOSTRAR A SEQUENCIA DO JOGO
  //E EFEITOS NOS BOTÕES
  #mostrarSequencia(seq, bt){
    return new Promise( async (resolve)=>{
      await sleeper(1000);
      for (var i = 0; i < seq.length; i++){
        let numBotao = seq[i];
        let botao;
        switch (numBotao) {
          case 1:
            botao = bt[0];
            await sleeper(200);
            botao.style.opacity = '1';
            this.#tocarSom('#som1');
            await this.#voltarOpacity(botao, 1500);
            break;
          case 2:
            botao = bt[1];
            await sleeper(200);
            botao.style.opacity = '1';
            this.#tocarSom('#som2');
            await this.#voltarOpacity(botao, 1500);
            break;
          case 3:
            botao = bt[2];
            await sleeper(200);
            botao.style.opacity = '1';
            this.#tocarSom('#som3');
            await this.#voltarOpacity(botao, 1500);
            break;
          case 4:
            botao = bt[3];
            await sleeper(200);
            botao.style.opacity = '1';
            this.#tocarSom('#som4');
            await this.#voltarOpacity(botao, 1500);
            break;
          default:
        }
      }
      resolve();
    })
  }

  //FUNÇÃO PARA CHECAR SE HOUVE CLIQUE NA RESPOSTA DO USUÁRIO
  #checarClick(seq, res, bts, i){
    let resol;

    let block = false; // variavel para bloquear varias entradas de click
    return new Promise((resolve)=> {
      this.#card.addEventListener('click', async (evento) =>{
        if (!block) {
          block = true;
          let elemento = evento.target;
          let botao;
          switch (elemento.id) {
            case bts[0].id:
              botao = bts[0];
              botao.style.opacity = '1';
              this.#tocarSom('#som1');
              await this.#voltarOpacity(botao, 1000);
              res.push(1);
              res[i] != seq[i] ? resolve(false) : resolve(true);
              break;
            case bts[1].id:
              botao = bts[1];
              botao.style.opacity = '1';
              this.#tocarSom('#som2');
              await this.#voltarOpacity(botao, 1000);
              res.push(2);
              res[i] != seq[i] ? resolve(false) : resolve(true);
              break;
            case bts[2].id:
              botao = bts[2];
              botao.style.opacity = '1';
              this.#tocarSom('#som3');
              await this.#voltarOpacity(botao, 1000);
              res.push(3);
              res[i] != seq[i] ? resolve(false) : resolve(true);
              break;
            case bts[3].id:
              botao = bts[3];
              botao.style.opacity = '1';
              this.#tocarSom('#som4');
              await this.#voltarOpacity(botao, 1000);
              res.push(4);
              res[i] != seq[i] ? resolve(false) : resolve(true);
              break;
            default:
              resolve(i);
          }

        }

      });
    });
  }

  //FUNÇÃO PARA CHECAR A RESPOSTA DO USUÁRIO
  #checarResposta(seq, bts){
    console.log('checagem iniciada');
    let i = 0;
    let rsl = true;
    let res = [];
    return new Promise ( async (resolve) => {
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

  //FUNÇÃO PARA TOCAR SOM DO BOTÃO
  #tocarSom(idSom){
    let som = document.querySelector(idSom);
    som.play();
  }

  //FUNÇÃO PARA PEGAR A CLASSIFICAÇÃO (EM BREVE)
  #getClassificacao(){

  }

  //FUNÇÃO PARA POSTAR A CLASSIFICAÇÃO (EM BREVE)
  #postClassificacao(){
    // let file = new XMLHttpRequest();
  }

  // FUNÇÃO CONTROLAR A FINALIZAÇÃO DO JOGO
  #finalizarJogo(){
    //registrar classificação
    alert(`Fim de jogo! \nSua pontuação foi ${this.#sequencia.length} pontos.`);
  }
}
