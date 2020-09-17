/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let result = 0;
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const dp = [];
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = Number(matrix[i][j]);
      } else {
        if (matrix[i][j] === '1') {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        } else {
          dp[i][j] = 0;
        }
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result ** 2;
};
