/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  const bools = new Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    if (bools[i]) {
      count++;
      for (let j = i + i; j < n; j += i) {
        bools[j] = false;
      }
    }
  }
  return count;
};
