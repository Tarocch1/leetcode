/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = [[], [], [], [], [], [], [], [], []];
  const cols = [[], [], [], [], [], [], [], [], []];
  const boxs = [[], [], [], [], [], [], [], [], []];
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] !== '.') {
        if (rows[y].includes(board[y][x])) return false;
        rows[y].push(board[y][x]);

        if (cols[x].includes(board[y][x])) return false;
        cols[x].push(board[y][x]);

        const box = Math.floor(y / 3) * 3 + Math.floor(x / 3);
        if (boxs[box].includes(board[y][x])) return false;
        boxs[box].push(board[y][x]);
      }
    }
  }
  return true;
};
