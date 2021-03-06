给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![](https://github.com/Tarocch1/leetcode/blob/master/problems/0001%20-%200050/17.%20%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88/assets/telephone_keypad.png)

**示例:**

```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**说明:**

尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。


**思路:**

采用递归的方法，递归函数接收两个参数，一是已经拼接好的字符串前缀 `prefix`，二是剩余的数字数组 `rest`。如果 `rest` 的长度大于 1，则取出其第一个数字，找出对应的字符分别加到 `prefix` 上，然后将新的字符串和去掉首元素的新的剩余数组传入新的递归；如果 `rest` 只有一个元素，找出其对应的数字，加到 `prefix` 上返回结束递归。
