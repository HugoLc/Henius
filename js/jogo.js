class Jogo{
  #botoes = [];
  #sequencia = [];
  constructor(botoes){
    this.#botoes = botoes;
  }

  function iniciarJogo(){
    let min = 1;
    let max = this.botoes.lenght;
    let indice = #gerarRandom(min, max);
    #sequencia.push(indice);
  }

  function #gerarRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
