/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = [];
  this.peekItem = undefined;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
  if (this.stack.length === 1) this.peekItem = x;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const temp = [];
  while (this.stack.length > 1) {
    temp.push(this.stack.pop());
  }
  const result = this.stack.pop();
  this.peekItem = temp[temp.length - 1];
  while (temp.length > 0) {
    const item = temp.pop();
    this.stack.push(item);
  }
  return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.peekItem;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
