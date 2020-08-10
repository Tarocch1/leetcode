/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const h = new ListNode();
  let cur = h;
  let first = head;
  let second = head.next;
  while (first) {
    if (!second) {
      cur.next = first;
      break;
    }
    const next = second.next;
    cur.next = second;
    cur = cur.next;
    cur.next = first;
    cur = cur.next;
    cur.next = null;
    first = next;
    second = next ? next.next : null;
  }
  return h.next;
};
