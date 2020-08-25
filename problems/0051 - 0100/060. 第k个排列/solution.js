/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const nums = Array.from(new Array(n)).map((v, i) => String(i + 1));
  let result = '';
  while (k > 0) {
    const factor = factorial(nums.length - 1);
    const i = Math.ceil(k / factor) - 1;
    result += nums[i];
    nums.splice(i, 1);
    k %= factor;
  }
  if (nums.length > 0) result += nums.reverse().join('');
  return result;
};

/**
 * @param {number} n
 * @return {number}
 */
const factorial = function (n) {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
};
