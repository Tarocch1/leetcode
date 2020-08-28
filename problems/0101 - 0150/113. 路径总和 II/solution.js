/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (root === null) return [];
  if (root.val === sum && root.left === null && root.right === null)
    return [[sum]];
  const left = pathSum(root.left, sum - root.val);
  const right = pathSum(root.right, sum - root.val);
  const result = [];
  left.forEach(item => item.unshift(root.val));
  right.forEach(item => item.unshift(root.val));
  result.push(...left, ...right);
  return result;
};
