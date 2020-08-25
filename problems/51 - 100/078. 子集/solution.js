/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];
  for (let i = 0; i < nums.length; i++) {
    const r = subsets(nums.slice(i + 1));
    r.forEach(item => item.push(nums[i]));
    result.push(...r);
  }
  return result;
};
