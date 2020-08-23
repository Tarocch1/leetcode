/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const result = new ListNode();
  let cur = head,
    num = 1,
    p = result,
    start = null,
    end = null,
    extra = null;
  while (cur !== null) {
    if (num < m) {
      p.next = cur;
      p = p.next;
      num++;
      cur = cur.next;
    } else if (num === m) {
      end = cur;
      start = cur;
      num++;
      cur = cur.next;
    } else if (num > m && num <= n) {
      const temp = cur;
      cur = cur.next;
      temp.next = start;
      start = temp;
      num++;
    } else {
      extra = cur;
      break;
    }
  }
  p.next = start;
  end.next = extra;
  return result.next;
};
