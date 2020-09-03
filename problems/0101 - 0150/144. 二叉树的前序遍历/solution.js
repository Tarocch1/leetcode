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
var preorderTraversal = function (root) {
  const result = [],
    stack = [];
  let cur = root;
  while (cur !== null) {
    result.push(cur.val);
    if (cur.left !== null) {
      stack.push(cur);
      cur = cur.left;
    } else if (cur.right !== null) {
      cur = cur.right;
    } else {
      let pre = stack.pop();
      while (!pre || !pre.right) {
        if (stack.length > 0) {
          pre = stack.pop();
        } else {
          break;
        }
      }
      if (pre && pre.right) {
        cur = pre.right;
      } else {
        cur = null;
      }
    }
  }
  return result;
};
