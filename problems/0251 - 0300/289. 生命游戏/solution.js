/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  if (board.length === 0 || board[0].length === 0) return;
  const m = board.length,
    n = board[0].length;
  /**
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  const getCell = (i, j) => {
    return (board[i] || [])[j] || null;
  };
  /**
   * @param {number} i
   * @param {number} j
   * @return {number[]}
   */
  const getAround = (i, j) => {
    const result = [];
    result.push(getCell(i - 1, j - 1));
    result.push(getCell(i - 1, j));
    result.push(getCell(i - 1, j + 1));
    result.push(getCell(i, j - 1));
    result.push(getCell(i, j + 1));
    result.push(getCell(i + 1, j - 1));
    result.push(getCell(i + 1, j));
    result.push(getCell(i + 1, j + 1));
    return result.filter(item => item !== null);
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const around = getAround(i, j);
      const liveNum = around.filter(item => item === 1 || item === -1).length;
      if (board[i][j] === 0) {
        if (liveNum === 3) {
          board[i][j] = 2;
        }
      } else {
        if (liveNum < 2 || liveNum > 3) {
          board[i][j] = -1;
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0;
      } else if (board[i][j] === 2) {
        board[i][j] = 1;
      }
    }
  }
};
