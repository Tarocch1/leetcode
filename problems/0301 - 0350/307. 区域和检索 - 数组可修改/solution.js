/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    this.dp[i] = this.dp[i - 1] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  for (let j = i; j < this.dp.length; j++) {
    this.dp[j] += val - this.nums[i];
  }
  this.nums[i] = val;
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
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
