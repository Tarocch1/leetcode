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
var isPalindrome = function (head) {
  if (head === null) return true;
  let slow = head,
    fast = head,
    len = 1;
  const half = [head.val];
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    half.push(slow.val);
    fast = fast.next.next;
    len += 2;
  }
  if (fast & fast.next) len += 1;
  if (len % 2 === 1) half.pop();
  slow = slow.next;
  while (half.length > 0) {
    if (slow.val !== half.pop()) return false;
    slow = slow.next;
  }
  return true;
};
