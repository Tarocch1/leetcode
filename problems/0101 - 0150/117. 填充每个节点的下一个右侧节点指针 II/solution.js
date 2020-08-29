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
  let head = root;
  while (head !== null) {
    let start = null,
      end = null,
      cur = head;
    while (cur !== null) {
      if (cur.left) {
        if (start === null) {
          start = cur.left;
          end = start;
        } else {
          end.next = cur.left;
          end = end.next;
        }
      }
      if (cur.right) {
        if (start === null) {
          start = cur.right;
          end = start;
        } else {
          end.next = cur.right;
          end = end.next;
        }
      }
      cur = cur.next;
    }
    head = start;
  }
  return root;
};
