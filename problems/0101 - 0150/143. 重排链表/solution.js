/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) return;
  const nodes = [];
  let cur = head.next;
  while (cur !== null) {
    nodes.push(cur);
    cur = cur.next;
  }
  cur = head;
  while (nodes.length > 0) {
    cur.next = nodes.pop();
    cur = cur.next;
    if (nodes.length > 0) {
      cur.next = nodes.shift();
      cur = cur.next;
    }
  }
  cur.next = null;
};
