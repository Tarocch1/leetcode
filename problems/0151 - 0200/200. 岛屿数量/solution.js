/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length === 0) return 0;
  const m = grid.length,
    n = grid[0].length;
  /**
   * @param {number} i
   * @param {number} j
   * @return {void}
   */
  const DFS = function (i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (grid[i][j] === '1') {
      grid[i][j] = '_';
      DFS(i - 1, j);
      DFS(i, j - 1);
      DFS(i, j + 1);
      DFS(i + 1, j);
    }
  };
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        result++;
        DFS(i, j);
      }
    }
  }
  return result;
};
