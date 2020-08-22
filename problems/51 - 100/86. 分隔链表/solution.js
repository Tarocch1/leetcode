/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const smallList = new ListNode();
  const bigList = new ListNode();
  let smallp = smallList,
    bigp = bigList,
    cur = head;
  while(cur !== null) {
    if (cur.val < x) {
      smallp.next = cur;
      smallp = smallp.next;
    } else {
      bigp.next = cur;
      bigp = bigp.next;
    }
    cur = cur.next;
  }
  smallp.next = bigList.next;
  bigp.next = null;
  return smallList.next;
};
