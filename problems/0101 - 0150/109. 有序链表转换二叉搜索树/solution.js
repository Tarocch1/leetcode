/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  /**
   * @param {ListNode} left
   * @param {ListNode} right
   * @return {ListNode}
   */
  const getMid = function (left, right) {
    let fast = left,
      slow = left;
    while (fast !== right && fast.next !== right) {
      fast = fast.next;
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  };
  /**
   * @param {ListNode} left
   * @param {ListNode} right
   * @return {TreeNode}
   */
  const buildTree = function (left, right) {
    if (left === right) return null;
    const mid = getMid(left, right);
    const root = new TreeNode(mid.val);
    root.left = buildTree(left, mid);
    root.right = buildTree(mid.next, right);
    return root;
  };

  return buildTree(head, null);
};
