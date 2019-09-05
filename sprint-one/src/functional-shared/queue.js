var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var newKey = parseInt(Object.keys(this.storage).pop()) + 1;
  if (isNaN(newKey)) {
    newKey = 0;
  }
  this.storage[newKey] = value;
};

queueMethods.dequeue = function() {
  var removeKey = parseInt(Object.keys(this.storage).shift());
  var removeItem = this.storage[removeKey];
  delete this.storage[removeKey];
  return removeItem;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
