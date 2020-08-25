/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  return C(m + n - 2, m - 1);
};

/**
 * @param {number} n
 * @return {number}
 */
const factorial = function (n) {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
};

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const C = function (n, m) {
  return factorial(n) / (factorial(m) * factorial(n - m));
};
