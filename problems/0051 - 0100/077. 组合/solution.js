/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (k === 1) return Array.from(new Array(n)).map((v, i) => [i + 1]);
  const result = [];
  for (let i = n; i > 1; i--) {
    const r = combine(i - 1, k - 1);
    r.forEach(item => item.push(i));
    result.push(...r);
  }
  return result;
};
