/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  const n = matrix.length,
    m = matrix[0].length;
  let l = 0,
    r = n * m - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const num = matrix[Math.floor(mid / m)][mid % m];
    if (num < target) {
      l = mid + 1;
    } else if (num > target) {
      r = mid - 1;
    } else if (num === target) {
      return true;
    }
  }
  return false;
};
