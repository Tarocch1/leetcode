/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;
  const nodes = [],
    list = [],
    map = new WeakMap();
  let cur = head;
  while (cur !== null) {
    const newNode = new Node(cur.val, null, null);
    if (nodes.length > 0) {
      nodes[nodes.length - 1].next = newNode;
    }
    nodes.push(newNode);
    list.push([nodes.length - 1, cur.random]);
    map.set(cur, newNode);
    cur = cur.next;
  }
  for (let item of list) {
    nodes[item[0]].random = map.get(item[1]) || null;
  }
  return nodes[0];
};
