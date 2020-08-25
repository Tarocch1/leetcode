/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  if (n === 0) return [0];
  const r = grayCode(n - 1);
  const result = [...r, ...r.map(item => 2 ** (n - 1) + item).reverse()];
  return result;
};
