/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  while (left !== right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    result = Math.max(result, Math.min(leftHeight, rightHeight) * (right - left));
    if (leftHeight <= rightHeight) left += 1;
    if (leftHeight > rightHeight) right -= 1;
  }
  return result;
};
