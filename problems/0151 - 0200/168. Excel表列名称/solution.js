/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let result = '';
  const letter = ['Z'];
  for (let i = 65; i <= 89; i++) {
    letter.push(String.fromCharCode(i));
  }
  while (n > 0) {
    const rem = n % 26;
    result = letter[rem] + result;
    n = Math.floor(n / 26);
    if (rem === 0) n--;
  }
  return result;
};
