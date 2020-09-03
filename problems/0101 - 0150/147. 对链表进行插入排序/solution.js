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
var insertionSortList = function (head) {
  const result = new ListNode(-Infinity);
  result.next = head;
  let pre = result,
    cur = head;
  while (cur) {
    if (cur.val >= pre.val) {
      pre = cur;
      cur = cur.next;
    } else {
      const node = cur;
      cur = cur.next;
      pre.next = cur;
      let n = result;
      while (n.next.val <= node.val) {
        n = n.next;
      }
      const t = n.next;
      n.next = node;
      node.next = t;
    }
  }
  return result.next;
};
