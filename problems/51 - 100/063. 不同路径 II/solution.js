/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const n = obstacleGrid.length,
    m = obstacleGrid[0].length;
  const dp = Array.from(new Array(n)).map(() => Array.from(new Array(m)));
  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else if (i + j > 0) {
        dp[i][j] = (i === 0 ? 0 : dp[i - 1][j]) + (j === 0 ? 0 : dp[i][j - 1]);
      }
    }
  }
  return dp[n - 1][m - 1];
};
