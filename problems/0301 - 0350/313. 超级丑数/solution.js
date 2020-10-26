/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const dp = [1];
  const p = {};
  primes.forEach(item => {
    p[item] = 0;
  });
  for (let i = 1; i < n; i++) {
    const temp = {};
    let min = Infinity;
    primes.forEach(item => {
      const next = dp[p[item]] * item;
      if (temp[next]) {
        temp[next].push(item);
      } else {
        temp[next] = [item];
      }
      min = Math.min(min, next);
    });
    dp[i] = min;
    temp[min].forEach(item => {
      p[item]++;
    });
  }
  return dp[n - 1];
};
