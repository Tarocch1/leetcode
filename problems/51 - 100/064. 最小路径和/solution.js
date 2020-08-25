/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const n = grid.length,
    m = grid[0].length;
  const dp = Array.from(new Array(n)).map(() => Array.from(new Array(m)));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i + j > 0) {
        dp[i][j] =
          Math.min(
            i === 0 ? Infinity : dp[i - 1][j],
            j === 0 ? Infinity : dp[i][j - 1],
          ) + grid[i][j];
      }
    }
  }
  return dp[n - 1][m - 1];
};
