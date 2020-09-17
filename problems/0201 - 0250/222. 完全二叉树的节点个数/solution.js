/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  let h = 0,
    cur = root;
  while (cur) {
    h++;
    cur = cur.left;
  }
  let left = 1,
    right = 2 ** (h - 1);
  /**
   * @param {number} n
   * @return {boolean}
   */
  const exit = n => {
    n += 2 ** (h - 1) - 1;
    const stack = [n];
    while (n > 1) {
      n = Math.floor(n / 2);
      stack.push(n);
    }
    let cur = root;
    for (let i = stack.length - 2; i >= 0; i--) {
      if (stack[i] % 2 === 0) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
      if (!cur) return false;
    }
    return true;
  };
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    if (exit(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return 2 ** (h - 1) - 1 + left;
};
