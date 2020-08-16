/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const cache = new Map();
  /**
   * @param {number} n
   * @return {string[]}
   */
  const recursion = length => {
    const result = [];
    if (length === 0) result.push('');
    if (cache.has(length)) {
      return cache.get(length);
    }
    for (let i = length; i > 0; i -= 2) {
      const leftLength = i - 2;
      const rightLength = length - i;
      const leftResult = recursion(leftLength);
      const rightResult = recursion(rightLength);
      for (let left of leftResult) {
        for (let right of rightResult) {
          result.push(`(${left})${right}`);
        }
      }
    }
    cache.set(length, result);
    return result;
  };
  return recursion(2 * n);
};
