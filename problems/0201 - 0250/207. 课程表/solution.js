/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const edges = Array.from(new Array(numCourses)).map(() => []);
  const visited = new Array(numCourses).fill(0);
  let valid = true;
  for (let prerequisite of prerequisites) {
    edges[prerequisite[0]].push(prerequisite[1]);
  }
  /**
   * @param {number} i
   * @return {void}
   */
  const dfs = function (n) {
    visited[n] = 1;
    for (let i of edges[n]) {
      if (visited[i] === 0) {
        dfs(i);
        if (!valid) return;
      } else if (visited[i] == 1) {
        valid = false;
        return;
      }
    }
    visited[n] = 2;
  };
  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }
  return valid;
};
