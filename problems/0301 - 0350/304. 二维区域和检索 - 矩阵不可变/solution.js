/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.dp = [];
  for (let row = 0; row < matrix.length; row++) {
    this.dp[row] = [];
    for (let col = 0; col < matrix[row].length; col++) {
      this.dp[row][col] =
        matrix[row][col] +
        getValue(this.dp, row, col - 1) +
        getValue(this.dp, row - 1, col) -
        getValue(this.dp, row - 1, col - 1);
    }
  }
};

/**
 * @param {number[][]} matrix
 * @param {number} row
 * @param {number} col
 * @returns {number}
 */
const getValue = function (matrix, row, col) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  if (row < 0 || row >= matrix.length) return 0;
  if (col < 0 || col >= matrix[0].length) return 0;
  return matrix[row][col];
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    getValue(this.dp, row2, col2) -
    getValue(this.dp, row2, col1 - 1) -
    getValue(this.dp, row1 - 1, col2) +
    getValue(this.dp, row1 - 1, col1 - 1)
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
