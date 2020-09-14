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
var reverseList = function (head) {
  let cur = head,
    p = null;
  while (cur !== null) {
    const next = cur.next;
    cur.next = p;
    p = cur;
    cur = next;
  }
  return p;
};
