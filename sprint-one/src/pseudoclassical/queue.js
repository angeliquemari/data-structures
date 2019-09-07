var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counterLowerLimit = 0;
  this.counterUpperLimit = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counterUpperLimit] = value;
  this.counterUpperLimit++;
};

Queue.prototype.dequeue = function() {
  if (this.counterUpperLimit - this.counterLowerLimit > 0) {
    var returnItem = this.storage[this.counterLowerLimit];
    delete this.storage[this.counterLowerLimit];
    this.counterLowerLimit++;
    return returnItem;
  }
};

Queue.prototype.size = function() {
  return this.counterUpperLimit - this.counterLowerLimit;
};
