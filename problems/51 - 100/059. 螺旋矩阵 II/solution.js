/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 0) return [];
  const result = Array.from(new Array(n)).map(() => Array.from(new Array(n)));

  let xDirect = 1,
    yDirect = 0,
    xRange = [0, n - 1],
    yRange = [0, n - 1];
  let x = 0,
    y = 0;
  for (let i = 1; i <= n ** 2; i++) {
    result[y][x] = i;
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
