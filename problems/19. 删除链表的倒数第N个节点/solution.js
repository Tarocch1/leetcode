/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const list = [];
  let cur = head;
  while (cur) {
    list.push(cur);
    cur = cur.next;
  }
  const len = list.length;
  if (n === len) return list[1] || null;
  list[len - n - 1].next = list[len - n + 1] || null;
  return head;
};
