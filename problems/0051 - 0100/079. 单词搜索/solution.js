/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const n = board.length,
    m = board[0].length,
    map = new Map();

  /**
   * @param {number} i
   * @param {number} j
   * @param {string} extra
   * @return {boolean}
   */
  const backtrack = function (i, j, extra) {
    if (extra === '') return true;
    if (i < 0 || i >= n || j < 0 || j >= m) return false;
    if (map.has(`${i}_${j}`)) return false;
    if (board[i][j] !== extra.charAt(0)) return false;
    map.set(`${i}_${j}`, true);
    if (backtrack(i - 1, j, extra.slice(1))) {
      return true;
    }
    if (backtrack(i, j - 1, extra.slice(1))) {
      return true;
    }
    if (backtrack(i, j + 1, extra.slice(1))) {
      return true;
    }
    if (backtrack(i + 1, j, extra.slice(1))) {
      return true;
    }
    map.delete(`${i}_${j}`, true);
    return false;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const result = backtrack(i, j, word);
      if (result) {
        return true;
      }
    }
  }

  return false;
};
