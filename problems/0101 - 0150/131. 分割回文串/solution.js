/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const len = s.length;
  if (len === 0) return [[]];
  const dp = {};
  for (let i = len - 1; i >= 0; i--) {
    dp[i] = {};
    for (let j = i; j < len; j++) {
      if (i === j) dp[i][j] = true;
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
      else if (s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] = true;
    }
  }
  /**
   * @param {number} start
   * @return {string[][]}
   */
  const slice = function (start) {
    const result = [];
    for (let i = start; i < len; i++) {
      if (dp[start][i]) {
        const r = slice(i + 1);
        if (r.length > 0) {
          r.forEach(item => item.unshift(s.slice(start, i + 1)));
        } else {
          r.push([s.slice(start, i + 1)]);
        }
        result.push(...r);
      }
    }
    return result;
  };
  return slice(0);
};
