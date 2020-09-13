/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const result = new ListNode();
  let p = result,
    cur = head;
  while (cur) {
    if (cur.val !== val) {
      p.next = cur;
      p = p.next;
    }
    cur = cur.next;
  }
  p.next = null;
  return result.next;
};
