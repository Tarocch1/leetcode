/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = {};
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = {};
    for (let j = i; j < s.length; j++) {
      if (wordDict.includes(s.slice(i, j + 1))) {
        dp[i][j] = true;
      } else {
        for (let k = i; k <= j; k++) {
          if (dp[i][k] && dp[k + 1][j]) {
            dp[i][j] = true;
            break;
          }
        }
      }
    }
  }
  return !!dp[0][s.length - 1];
};
