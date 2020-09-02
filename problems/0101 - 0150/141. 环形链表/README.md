给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。

**示例 1:**

![](https://github.com/Tarocch1/leetcode/blob/master/problems/0101%20-%200150/141.%20%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8/assets/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2:**

![](https://github.com/Tarocch1/leetcode/blob/master/problems/0101%20-%200150/141.%20%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8/assets/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3:**

![](https://github.com/Tarocch1/leetcode/blob/master/problems/0101%20-%200150/141.%20%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8/assets/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

**进阶:**

你能用 O(1)（即，常量）内存解决此问题吗？

**思路:**

采用快慢指针的方法。慢指针从头开始向后走，每次走一位；快指针从头的后一位开始走，每次走两位。如果不是环形链表，快指针会先到达 null；如果是环形链表，快指针最终会超过慢指针一圈并追上慢指针。
