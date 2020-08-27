/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const len = postorder.length;
  if (len === 0) return null;
  const root = new TreeNode(postorder[len - 1]);
  const i = inorder.findIndex(n => n === postorder[len - 1]);
  root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  root.right = buildTree(
    inorder.slice(i + 1, len),
    postorder.slice(i, len - 1),
  );
  return root;
};
