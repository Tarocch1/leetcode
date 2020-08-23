/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b);
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  var subsets = function (nums) {
    const result = [[]];
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      const r = subsets(nums.slice(i + 1));
      r.forEach(item => item.push(nums[i]));
      result.push(...r);
    }
    return result;
  };
  return subsets(nums);
};
