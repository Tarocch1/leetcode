/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  const result = [];
  let str = `${nums[0]}`;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      if (!str.endsWith('->')) {
        str += '->';
      }
    } else {
      if (str.endsWith('->')) {
        str += `${nums[i - 1]}`;
      }
      result.push(str);
      str = `${nums[i]}`;
    }
  }
  if (str.endsWith('->')) {
    str += `${nums[nums.length - 1]}`;
  }
  result.push(str);
  return result;
};
