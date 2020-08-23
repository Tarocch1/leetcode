/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.charAt(0) === '0') return 0;
  const dp = [1];
  for (let i = 1; i < s.length; i++) {
    let result = 0;
    if (s.charAt(i) !== '0') {
      result += dp[i - 1];
    }
    const num = Number(`${s.slice(i - 1, i + 1)}`);
    if (num >= 10 && num <= 26) {
      if (i === 1) {
        result++;
      } else {
        result += dp[i - 2];
      }
    }
    dp[i] = result;
  }
  return dp[s.length - 1] || 0;
};
