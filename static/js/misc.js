
//FUNÇÃO PARA PAUSAR A EXECUÇÃO DO CÓDIGO
//EM UM TEMPO DETERMINADO
export default function sleeper(ms){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
