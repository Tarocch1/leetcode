/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (root === null) return [];
  const result = [];
  if (root.left || root.right) {
    const left = binaryTreePaths(root.left);
    left.forEach(path => {
      result.push(`${root.val}->${path}`);
    });
    const right = binaryTreePaths(root.right);
    right.forEach(path => {
      result.push(`${root.val}->${path}`);
    });
  } else {
    return [`${root.val}`];
  }
  return result;
};
