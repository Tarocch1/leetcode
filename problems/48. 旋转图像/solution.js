/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  for (let i = 0; i < Math.ceil(len / 2); i ++) {
    for (let j = 0; j < Math.floor(len / 2); j++) {
      const temp = matrix[len - 1 - j][i];
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - j - 1];
      matrix[len - 1 - i][len - j - 1] = matrix[j][len - 1 -i];
      matrix[j][len - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};
