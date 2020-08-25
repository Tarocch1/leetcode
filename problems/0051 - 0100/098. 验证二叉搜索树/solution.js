/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  /**
   * @param {TreeNode} root
   * @param {number} min
   * @param {number} max
   * @return {boolean}
   */
  const valid = function (root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
      valid(root.left, min, Math.min(max, root.val)) &&
      valid(root.right, Math.max(min, root.val), max)
    );
  };
  return valid(root, -Infinity, Infinity);
};
