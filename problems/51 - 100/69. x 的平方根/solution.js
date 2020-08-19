/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0,
    r = x;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (mid ** 2 < x) {
      l = mid + 1;
    } else if (mid ** 2 > x) {
      r = mid - 1;
    } else if (mid ** 2 === x) {
      return mid;
    }
  }
  return r;
};
