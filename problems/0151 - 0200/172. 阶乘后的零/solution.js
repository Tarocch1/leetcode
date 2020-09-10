/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let result = 0;
  let cur = 5;
  while (n >= cur) {
    result += Math.floor(n / cur);
    cur *= 5;
  }
  return result;
};
