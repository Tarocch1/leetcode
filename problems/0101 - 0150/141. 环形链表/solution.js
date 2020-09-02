/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let fast = head,
    slow = head.next;
  while (fast !== slow) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
