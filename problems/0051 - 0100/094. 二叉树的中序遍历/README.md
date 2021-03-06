给定一个二叉树，返回它的*中序*遍历。

**示例:**

```
输入: [1,null,2,3]
    1
     \
      2
     /
    3
```

输出: [1,3,2]

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？

**思路:**

遍历二叉树，使用一个栈记录包含左子树的节点。遍历到某一个节点时，如果其有左子节点，将其压栈，向左遍历。如果有右子节点，将其加入结果中，向右遍历。如果没有子节点，先将其加入结果，之后栈顶出栈，从栈顶处继续遍历，先加入结果，之后向右遍历。
