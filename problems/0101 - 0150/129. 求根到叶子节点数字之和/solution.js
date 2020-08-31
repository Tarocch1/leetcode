/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  /**
   * @param {TreeNode} root
   * @param {number} result
   * @return {number}
   */
  const DFS = function (root, result) {
    if (root === null) return 0;
    result = result * 10 + root.val;
    if (root.left === null && root.right === null) return result;
    return DFS(root.left, result) + DFS(root.right, result);
  };
  return DFS(root, 0);
};
