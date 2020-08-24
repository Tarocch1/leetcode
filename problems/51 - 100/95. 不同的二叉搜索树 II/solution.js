/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];

  /**
   * @param {number} start
   * @param {number} end
   * @return {TreeNode[]}
   */
  const generate = function (start, end) {
    if (start > end) return [null];
    const result = [];
    for (let i = start; i <= end; i++) {
      const leftTrees = generate(start, i - 1);
      const rightTrees = generate(i + 1, end);
      for (let left of leftTrees) {
        for (let right of rightTrees) {
          const root = new TreeNode(i, left, right);
          result.push(root);
        }
      }
    }
    return result;
  };

  return generate(1, n);
};
