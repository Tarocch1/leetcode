/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [],
    map = new Map();

  if (nums.length === 1) return [[...nums]];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) continue;
    const r = permuteUnique(nums.filter((v, index) => index !== i));
    r.forEach(item => item.unshift(nums[i]));
    result.push(...r);
    map.set(nums[i], true);
  }

  return result;
};
