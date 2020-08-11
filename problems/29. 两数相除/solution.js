/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const sign = (dividend > 0) ^ (divisor > 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  const div = (a, b) => {
    if (a < b) return 0;
    let count = 1;
    let tb = b;
    while (tb + tb <= a) {
      count += count;
      tb += tb;
    }
    return count + div(a - tb, b);
  };

  let result = div(dividend, divisor);
  if (sign) result = -result;
  return Math.max(Math.min(result, 2 ** 31 - 1), -(2 ** 31));
};
