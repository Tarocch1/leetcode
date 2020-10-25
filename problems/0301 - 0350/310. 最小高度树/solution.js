/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const indegree = new Array(n).fill(0);
  const graph = indegree.map(() => []);
  for (let i = 0; i < edges.length; i++) {
    indegree[edges[i][0]]++;
    indegree[edges[i][1]]++;
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }
  const queue = [];
  indegree.forEach((item, i) => {
    if (item === 1) {
      queue.push(i);
    }
  });
  while (n > 2) {
    let cnt = queue.length;
    n -= cnt;
    while (cnt--) {
      const temp = queue.shift();
      indegree[temp] = 0;
      for (let i = 0; i < graph[temp].length; i++) {
        if (indegree[graph[temp][i]] !== 0) {
          indegree[graph[temp][i]]--;
          if (indegree[graph[temp][i]] === 1) {
            queue.push(graph[temp][i]);
          }
        }
      }
    }
  }
  return queue;
};
