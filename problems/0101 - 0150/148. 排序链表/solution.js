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
var sortList = function (head) {
  let len = 0,
    intv = 1;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  const result = new ListNode();
  result.next = head;
  while (intv < len) {
    let pre = result,
      h = result.next;
    while (h) {
      let i = intv;
      let h1 = h;
      while (i > 0 && h !== null) {
        h = h.next;
        i--;
      }
      if (i > 0) break;
      i = intv;
      let h2 = h;
      while (i > 0 && h != null) {
        h = h.next;
        i--;
      }
      let c1 = intv,
        c2 = intv - i;
      while (c1 > 0 && c2 > 0) {
        if (h1.val < h2.val) {
          pre.next = h1;
          h1 = h1.next;
          c1--;
        } else {
          pre.next = h2;
          h2 = h2.next;
          c2--;
        }
        pre = pre.next;
      }
      pre.next = c1 === 0 ? h2 : h1;
      while (c1 > 0 || c2 > 0) {
        pre = pre.next;
        c1--;
        c2--;
      }
      pre.next = h;
    }
    intv *= 2;
  }
  return result.next;
};
