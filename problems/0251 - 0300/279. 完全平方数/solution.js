/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const squareNums = [];
  for (let i = 1; i < Math.sqrt(n) + 1; i++) {
    squareNums.push(i ** 2);
  }
  /**
   * @param {number} n
   * @param {number} count
   * @returns {boolean}
   */
  const isDividedBy = (n, count) => {
    if (count === 1) return squareNums.includes(n);
    for (let squareNum of squareNums) {
      if (isDividedBy(n - squareNum, count - 1)) {
        return true;
      }
    }
    return false;
  };
  for (let i = 1; i <= n; i++) {
    if (isDividedBy(n, i)) {
      return i;
    }
  }
};
