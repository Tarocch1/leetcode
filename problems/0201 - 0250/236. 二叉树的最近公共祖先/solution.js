/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result = null;
  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  const dfs = (root, p, q) => {
    if (root === null) return false;
    const left = dfs(root.left, p, q);
    const right = dfs(root.right, p, q);
    if (
      (left && right) ||
      ((root.val === p.val || root.val === q.val) && (left || right))
    ) {
      result = root;
    }
    return left || right || root.val === p.val || root.val === q.val;
  };
  dfs(root, p, q);
  return result;
};
