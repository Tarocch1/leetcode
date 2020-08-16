将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"LEETCODEISHIRING"` 行数为 3 时，排列如下：

```
L   C   I   R
E T O E S I I G
E   D   H   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"LCIRETOESIIGEDHN"`。

请你实现这个将字符串进行指定行数变换的函数：

```
string convert(string s, int numRows);
```

**示例 1:**

```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```

**示例 2:**

```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
```

**思路:**

从示例可以看出，字符串被分成了 `numRows` 个子字符串，每个字符串中字符的顺序均是按照原字符串中的相对位置排列的，我们构建一个字符串数组，同时注意到当前遍历字符所属的字符串在数组中上下来回运动，遍历给定的字符串 `s`，确定当前遍历的字符属于字符串数组中的哪一个子字符串，添加进去，最终合成一个新的字符串即可。
