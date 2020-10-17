给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。

![](https://github.com/Tarocch1/leetcode/blob/master/problems/0301%20-%200350/304.%20%E4%BA%8C%E7%BB%B4%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%A3%80%E7%B4%A2%20-%20%E7%9F%A9%E9%98%B5%E4%B8%8D%E5%8F%AF%E5%8F%98/assets/304.png)

上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。

**示例:**

```
给定 matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
```

**说明:**

- 你可以假设矩阵不可变。
- 会多次调用 *sumRegion* 方法。
- 你可以假设 row1 ≤ row2 且 col1 ≤ col2。

**思路:**

类似于[303. 区域和检索 - 数组不可变](https://github.com/Tarocch1/leetcode/tree/master/problems/0301%20-%200350/303.%20%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%A3%80%E7%B4%A2%20-%20%E6%95%B0%E7%BB%84%E4%B8%8D%E5%8F%AF%E5%8F%98)的方法，转换为二维即可。
