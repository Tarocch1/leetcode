实现 [pow(x, n)](https://www.cplusplus.com/reference/valarray/pow/)，即计算 x 的 n 次幂函数。

**示例 1:**

```
输入: 2.00000, 10
输出: 1024.00000
```

**示例 2:**

```
输入: 2.10000, 3
输出: 9.26100
```

**示例 3:**

```
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
```

**说明:**

- -100.0 < x < 100.0
- n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1]。

**思路:**

根据幂的性质：

x<sup>n</sup> = x<sup>n<sub>1</sub></sup> * x<sup>n<sub>2</sub></sup> * ... * x<sup>n<sub>k</sub></sup>

其中：

n = n<sub>1</sub> + n<sub>2</sub> + ... + n<sub>k</sub>

例如：

x<sup>11</sup> = x<sup>1</sup> * x<sup>2</sup> * x<sup>8</sup>

而 (11)<sub>10</sub> = (1011)<sub>2</sub>

因此，初始结果是 1，从最低位遍历 n 的二进制，每遍历一位，如果这一位是 1，表明需要将 x 加入结果的相乘列中，之后 x 自身乘方。最终得到结果。
