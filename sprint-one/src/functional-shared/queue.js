var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var newKey = parseInt(Object.keys(this).slice(0, Object.keys(this).length - Object.keys(queueMethods).length).pop()) + 1;
  if (isNaN(newKey)) {
    newKey = 0;
  }
  this[newKey] = value;
};

queueMethods.dequeue = function() {
  var removeKey = parseInt(Object.keys(this).slice(0, Object.keys(this).length - Object.keys(queueMethods).length).shift());
  var removeItem = this[removeKey];
  delete this[removeKey];
  return removeItem;
};

queueMethods.size = function() {
  return Object.keys(this).length - Object.keys(queueMethods).length;
};
