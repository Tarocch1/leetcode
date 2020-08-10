/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let l1cur = l1;
  let l2cur = l2;
  if (!l1cur) return l2;
  if (!l2cur) return l1;
  const head = new ListNode();
  let cur = head;
  while (l1cur || l2cur) {
    if (!l1cur) {
      cur.next = l2cur;
      break;
    }
    if (!l2cur) {
      cur.next = l1cur;
      break;
    }
    if (l1cur.val <= l2cur.val) {
      cur.next = l1cur;
      l1cur = l1cur.next;
    } else {
      cur.next = l2cur;
      l2cur = l2cur.next;
    }
    cur = cur.next;
  }
  return head.next;
};
