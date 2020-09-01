/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node === null) return null;
  const nodes = [],
    list = [];
  const queue = [node];
  while (queue.length > 0) {
    const cur = queue.shift();
    nodes[cur.val] = new Node(cur.val);
    list[cur.val] = cur.neighbors.map(neighbor => neighbor.val);
    cur.neighbors.forEach(neighbor => {
      if (!nodes[neighbor.val]) {
        queue.push(neighbor);
      }
    });
  }
  nodes.forEach(node => {
    const neighbors = list[node.val].map(val => nodes[val]);
    node.neighbors = neighbors;
  });
  return nodes[node.val];
};
