
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function timer(segundos) {
  segundos += segundos * 1000;
  await sleep(segundos);
}
