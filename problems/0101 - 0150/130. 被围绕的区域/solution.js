/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0) return;
  const m = board.length,
    n = board[0].length;
  /**
   * @param {number} i
   * @param {number} j
   * @return {void}
   */
  const DFS = function (i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (board[i][j] === 'O') {
      board[i][j] = '_';
      DFS(i - 1, j);
      DFS(i, j - 1);
      DFS(i, j + 1);
      DFS(i + 1, j);
    }
  };
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') {
      DFS(0, j);
    }
    if (board[m - 1][j] === 'O') {
      DFS(m - 1, j);
    }
  }
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      DFS(i, 0);
    }
    if (board[i][n - 1] === 'O') {
      DFS(i, n - 1);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      switch (board[i][j]) {
        case '_':
          board[i][j] = 'O';
          break;
        case 'O':
          board[i][j] = 'X';
        default:
          break;
      }
    }
  }
};
