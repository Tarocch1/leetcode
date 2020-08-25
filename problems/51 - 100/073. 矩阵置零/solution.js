/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const n = matrix.length,
    m = matrix[0].length;
  let firstCol = false;
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
    }
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }
  if (firstCol) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
};
