/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  if (nums.length === 1) return [[...nums]];

  for (let i = 0; i < nums.length; i++) {
    const r = permute(nums.filter(v => v !== nums[i]));
    r.forEach(item => item.unshift(nums[i]));
    result.push(...r);
  }

  return result;
};
