/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const nodes = preorder.split(',');
  let slot = 1;
  for (let node of nodes) {
    slot--;
    if (slot < 0) return false;
    if (node !== '#') slot += 2;
  }
  return slot === 0;
};
