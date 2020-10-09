/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.queue = [];
  this.p = -1;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.p >= 0 && this.queue.length > this.p) {
    return this.queue[this.p];
  } else {
    this.queue.push(this.iterator.next());
    this.p = this.queue.length - 1;
    return this.queue[this.p];
  }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.p >= 0 && this.queue.length > this.p) {
    this.p++;
    return this.queue[this.p - 1];
  } else {
    return this.iterator.next();
  }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.iterator.hasNext() || (this.p >= 0 && this.queue.length > this.p);
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
