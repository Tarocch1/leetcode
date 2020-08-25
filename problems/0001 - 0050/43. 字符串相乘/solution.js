/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const len1 = num1.length,
    len2 = num2.length;
  const result = new Array(len1 + len2).fill(0);
  for (let i = len1 - 1; i >= 0; i--) {
    const x = num1.charAt(i);
    for (let j = len2 - 1; j >= 0; j--) {
      const y = num2.charAt(j);
      result[i + j + 1] += x * y;
    }
  }
  for (let k = len1 + len2 - 1; k > 0; k--) {
    result[k - 1] += (result[k] / 10) | 0;
    result[k] %= 10;
  }
  const index = result[0] === 0 ? 1 : 0;
  return result.slice(index).join('');
};
