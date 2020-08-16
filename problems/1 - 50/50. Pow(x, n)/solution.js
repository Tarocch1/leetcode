/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let abs = Math.abs(n);
  let result = 1;
  while (abs > 0) {
    if (abs % 2 === 1) {
      result *= x;
    }
    x *= x;
    abs = Math.floor(abs / 2);
  }
  return n < 0 ? 1 / result : result;
};
