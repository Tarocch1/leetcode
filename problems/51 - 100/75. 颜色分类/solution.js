/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = -1,
    p1 = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      p0++;
      p1++;
      nums.splice(i, 1);
      nums.splice(p0, 0, 0);
    } else if (nums[i] === 1) {
      p1++;
      nums.splice(i, 1);
      nums.splice(p1, 0, 1);
    }
  }
};
