/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null;
  /**
   * @param {Node} left
   * @param {Node} right
   * @return {}
   */
  const _connect = function (left, right) {
    if (left === null) return;
    left.next = right;
    _connect(left.left, left.right);
    _connect(left.right, right.left);
    _connect(right.left, right.right);
  };

  _connect(root.left, root.right);
  return root;
};
