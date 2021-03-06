给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树*每个节点*的左右两个子树的高度差的绝对值不超过 1。

**示例:**

```
给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
```

**思路:**

思路类似于[108. 将有序数组转换为二叉搜索树](https://github.com/Tarocch1/leetcode/tree/master/problems/0101%20-%200150/108.%20%E5%B0%86%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91)。

由于本题的参数是链表，因此无法直接取到中位数，采用快慢指针的方法取链表中间节点。快慢指针均从链表头开始移动，快指针每次移动两位，慢指针每次移动一位，当快指针移动到链表结尾时，慢指针处于链表中间。
