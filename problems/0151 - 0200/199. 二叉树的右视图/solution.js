/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return [];
  const result = [];
  let next = [root];
  while (next.length > 0) {
    result.push(next[0].val);
    const newNext = [];
    for (let node of next) {
      if (node.right) newNext.push(node.right);
      if (node.left) newNext.push(node.left);
    }
    next = newNext;
  }
  return result;
};
