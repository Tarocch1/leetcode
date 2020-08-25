/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  /**
   * @param {TreeNode[]} nodes
   * @return {void}
   */
  const recursion = function (nodes) {
    const res = [],
      next = [];
    nodes.forEach(node => {
      if (node) {
        res.push(node.val);
        next.push(node.left, node.right);
      }
    });
    if (res.length > 0) result.push(res);
    if (next.length > 0) recursion(next);
  };
  recursion([root]);
  return result;
};
