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
var inorderTraversal = function (root) {
  const result = [],
    stack = [];
  let cur = root;
  while (cur || stack.length > 0) {
    if (cur && cur.left) {
      stack.push(cur);
      cur = cur.left;
    } else if (cur && cur.right) {
      result.push(cur.val);
      cur = cur.right;
    } else {
      if (cur) result.push(cur.val);
      cur = stack.pop();
      if (cur) {
        result.push(cur.val);
        cur = cur.right;
      }
    }
  }
  return result;
};
