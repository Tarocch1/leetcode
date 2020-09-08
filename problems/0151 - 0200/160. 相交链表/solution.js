/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curA = headA,
    curB = headB,
    aIsShort = false;
  while (curA && curB) {
    curA = curA.next;
    curB = curB.next;
  }
  aIsShort = !curA;
  let diff = 0;
  while (curA || curB) {
    curA = curA ? curA.next : null;
    curB = curB ? curB.next : null;
    diff++;
  }
  curA = headA;
  curB = headB;
  if (aIsShort) {
    for (let i = 0; i < diff; i++) {
      curB = curB.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      curA = curA.next;
    }
  }
  while (curA && curB) {
    if (curA === curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }
  return null;
};
