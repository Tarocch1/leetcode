/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n <= 0) return false;
  const map = new Map();
  while (!map.has(n)) {
    if (n === 1) return true;
    map.set(n, true);
    let next = 0;
    while (n > 0) {
      next += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    n = next;
  }
  return false;
};
