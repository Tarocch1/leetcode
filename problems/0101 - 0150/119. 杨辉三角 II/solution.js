/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = [];
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = i - 1; j >= 1; j--) {
      result[j] += result[j - 1];
    }
    result.push(1);
  }
  return result;
};
