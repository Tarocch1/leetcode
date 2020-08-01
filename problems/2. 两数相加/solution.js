/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const result = new ListNode(0);
  result.next = null;
  let cur = result;
  let cur1 = l1;
  let cur2 = l2;
  while (cur1 !== null || cur2 !== null) {
    const val1 = cur1 !== null ? cur1.val : 0;
    const val2 = cur2 !== null ? cur2.val : 0;
    const sum = val1 + val2 + carry;

    const newNode = new ListNode(sum % 10);
    newNode.next = null;

    carry = sum >= 10 ? 1 : 0;

    cur.next = newNode;
    cur = cur.next;

    if (cur1 !== null) {
      cur1 = cur1.next;
    }
    if (cur2 !== null) {
      cur2 = cur2.next;
    }
  }
  if (carry > 0) {
    const newNode = new ListNode(carry);
    newNode.next = null;
    cur.next = newNode;
  }
  return result.next;
};
