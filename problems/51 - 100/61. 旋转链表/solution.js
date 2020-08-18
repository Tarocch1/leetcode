/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;
  if (!head.next) return head;
  let len = 1,
    cur = head;
  while (cur.next !== null) {
    len++;
    cur = cur.next;
  }
  cur.next = head;
  for (let i = 0; i < len - (k % len); i++) {
    cur = cur.next;
  }
  const result = cur.next;
  cur.next = null;
  return result;
};
