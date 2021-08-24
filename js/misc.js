
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function timer(segundos) {
  let ms = segundos * 1000;
  await sleep(ms);
}
