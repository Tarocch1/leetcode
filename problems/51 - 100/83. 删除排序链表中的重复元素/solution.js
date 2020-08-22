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
  const result = new ListNode(NaN);
  let p = result,
    cur = head;
  while (cur !== null) {
    if (cur.val !== p.val) {
      p.next = cur;
      p = p.next;
    }
    cur = cur.next;
  }
  p.next = null;
  return result.next;
};
