/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  const w = Math.min(C, G) - Math.max(A, E);
  const h = Math.min(D, H) - Math.max(B, F);
  return (
    (C - A) * (D - B) + (G - E) * (H - F) - Math.max(w, 0) * Math.max(h, 0)
  );
};
