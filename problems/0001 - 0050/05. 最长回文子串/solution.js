/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len === 0) return '';
  let result = s[0];
  const dp = {};

  for (let i = len - 1; i >= 0; i--) {
    dp[i] = {};
    for (let j = i; j < len; j++) {
      if (i === j) dp[i][j] = true;
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
      else if (s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] = true;

      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.slice(i, j + 1);
      }
    }
  }

  return result;
};
