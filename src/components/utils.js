export function shuffle(arr) {
  let result = arr;
  for (let i = 1; i < arr.length; i *= 2) {
    result = shuffleWithChunkSize(result, i);
    console.log('for', i, result);
  }
  return result;
}

function shuffleWithChunkSize(arr, size) {
  let output = [];
  const splitPoint = Math.floor((arr.length + 1) / 2);
  for (let i = 0; i < splitPoint; i += size) {
    const a = arr.slice(i, Math.min(i + size, splitPoint));
    const b = arr.slice(splitPoint + i, splitPoint + i + size);
    console.log(splitPoint, a, b);
    output = output.concat(a, b);
  }
  return output;
}
