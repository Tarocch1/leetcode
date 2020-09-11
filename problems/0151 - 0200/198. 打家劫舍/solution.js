/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  const dp = [];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], (dp[i - 2] || 0) + nums[i]);
  }
  return dp[nums.length - 1];
};
