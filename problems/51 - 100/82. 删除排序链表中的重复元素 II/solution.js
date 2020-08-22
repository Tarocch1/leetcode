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
var deleteDuplicates = function (head) {
  const result = new ListNode();
  let p = result,
    cur = head,
    pre = null;
  while (cur !== null) {
    if (!pre || pre.val !== cur.val) {
      if (!cur.next || cur.next.val !== cur.val) {
        p.next = cur;
        p = p.next;
      }
    }
    pre = cur;
    cur = cur.next;
  }
  p.next = null;
  return result.next;
};
