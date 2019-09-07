var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.counterLowerLimit = 0;
  newQueue.counterUpperLimit = 0;

  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counterUpperLimit] = value;
  this.counterUpperLimit++;
};

queueMethods.dequeue = function() {
  if (this.counterUpperLimit - this.counterLowerLimit > 0) {
    var returnItem = this.storage[this.counterLowerLimit];
    delete this.storage[this.counterLowerLimit];
    this.counterLowerLimit++;
    return returnItem;
  }
};

queueMethods.size = function() {
  return this.counterUpperLimit - this.counterLowerLimit;
};
