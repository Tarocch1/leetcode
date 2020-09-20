/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  if (nums.length === 0) return [];
  const result = [];
  let cand1 = nums[0],
    count1 = 0;
  let cand2 = nums[0],
    count2 = 0;
  for (let num of nums) {
    if (cand1 === num) {
      count1++;
      continue;
    }
    if (cand2 === num) {
      count2++;
      continue;
    }
    if (count1 === 0) {
      cand1 = num;
      count1++;
      continue;
    }
    if (count2 === 0) {
      cand2 = num;
      count2++;
      continue;
    }
    count1--;
    count2--;
  }
  count1 = 0;
  count2 = 0;
  for (let num of nums) {
    if (num === cand1) count1++;
    else if (num === cand2) count2++;
  }
  if (count1 > Math.floor(nums.length / 3)) result.push(cand1);
  if (count2 > Math.floor(nums.length / 3)) result.push(cand2);
  return result;
};
