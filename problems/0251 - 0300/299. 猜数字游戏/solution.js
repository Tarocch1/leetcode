/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let a = 0,
    b = 0;
  const cache = new Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    const secretChar = secret.charAt(i);
    const guessChar = guess.charAt(i);
    if (secretChar === guessChar) {
      a++;
    } else {
      if (cache[Number(secretChar)]++ < 0) b++;
      if (cache[Number(guessChar)]-- > 0) b++;
    }
  }
  return `${a}A${b}B`;
};
