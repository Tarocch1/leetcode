/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;
  let result = nums[0];
  const maxDP = [nums[0]],
    minDP = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    maxDP[i] = Math.max(
      nums[i],
      maxDP[i - 1] * nums[i],
      minDP[i - 1] * nums[i],
    );
    minDP[i] = Math.min(
      nums[i],
      maxDP[i - 1] * nums[i],
      minDP[i - 1] * nums[i],
    );
    result = Math.max(result, maxDP[i]);
  }
  return result;
};
