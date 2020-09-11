/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result += n & 1;
    n >>> 1;
  }
  return result;
};
