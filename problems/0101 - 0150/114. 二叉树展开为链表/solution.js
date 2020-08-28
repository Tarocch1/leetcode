/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  /**
   * @param {TreeNode} root
   * @return {TreeNode[]}
   */
  const flat = function (root) {
    if (root === null) return [];
    let end = root;
    const left = flat(root.left);
    const right = flat(root.right);
    root.left = null;
    if (left[0]) {
      root.right = left[0];
      end = left[1];
    }
    if (right[0]) {
      end.right = right[0];
      end = right[1];
    }
    return [root, end];
  };
  flat(root);
};
