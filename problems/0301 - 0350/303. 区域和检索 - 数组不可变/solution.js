/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    this.dp[i] = this.dp[i - 1] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  if (i === 0) return this.dp[j];
  return this.dp[j] - this.dp[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
