class Jogo{
  const #botoes = [];
  let #sequencia = [];
  let #resposta =[];
  constructor(botoes){
    this.#botoes = botoes;
  }

  function rodarJogo(){
    let min = 1;
    let max = this.botoes.lenght;
    let gameOn = true;

    while (gameOn) {
      let indice = #gerarRandom(min, max);
      #sequencia.push(indice);
      #mostrarSequencia(#sequencia, #botoes);
      let resposta = #checarResposta(#sequencia, #resposta);
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

  function #checarResposta(seq, res){
    if (!true) {
      //gameOn = false;
    }
  }

  function #finalizarJogo(){
    //registrar classificação
  }

  function #tocarSom(idSom){
    let sound = document.getElementById(soundObj);
    sound.Play();
  }
}
