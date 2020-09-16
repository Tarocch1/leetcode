/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const nums = Array.from(new Array(9)).map((v, i) => i + 1);

  /**
   * @param {number[]} nums
   * @param {number} k
   * @param {number} n
   * @return {number[][]}
   */
  const _find = (nums, k, n) => {
    if (nums.length < k) return [];
    if (k === 1 && nums.includes(n)) return [[n]];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      const r = _find(nums.slice(i + 1), k - 1, n - nums[i]);
      r.forEach(item => item.unshift(nums[i]));
      result.push(...r);
    }
    return result;
  };

  return _find(nums, k, n);
};
