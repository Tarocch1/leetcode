/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  const m = matrix.length,
    n = matrix[0].length;
  const result = [];
  let xDirect = 1,
    yDirect = 0,
    xRange = [0, n - 1],
    yRange = [0, m - 1];
  let x = 0,
    y = 0;
  while (xRange[0] <= xRange[1] && yRange[0] <= yRange[1]) {
    const cur = matrix[y][x];
    result.push(cur);
    if (xDirect === 0) {
      if (y + yDirect > yRange[1]) {
        // 右下角拐点
        xRange[1] = x - 1;
        x -= 1;
        xDirect = -1;
        yDirect = 0;
      } else if (y + yDirect < yRange[0]) {
        // 左上角拐点
        xRange[0] = x + 1;
        x += 1;
        xDirect = 1;
        yDirect = 0;
      } else {
        y += yDirect;
      }
    } else if (yDirect === 0) {
      if (x + xDirect > xRange[1]) {
        // 右上角拐点
        yRange[0] = y + 1;
        y += 1;
        xDirect = 0;
        yDirect = 1;
      } else if (x + xDirect < xRange[0]) {
        // 左下角拐点
        yRange[1] = y - 1;
        y -= 1;
        xDirect = 0;
        yDirect = -1;
      } else {
        x += xDirect;
      }
    }
  }
  return result;
};
