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
var zigzagLevelOrder = function (root) {
  const result = [];
  let direct = 1;
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
        if (direct > 0) {
          next.unshift(node.left, node.right);
        } else {
          next.unshift(node.right, node.left);
        }
      }
    });
    direct = -direct;
    if (res.length > 0) result.push(res);
    if (next.length > 0) recursion(next);
  };
  recursion([root]);
  return result;
};
