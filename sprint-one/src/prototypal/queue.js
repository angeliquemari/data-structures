var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  var newKey = parseInt(Object.keys(this).pop()) + 1;
  if (isNaN(newKey)) {
    newKey = 0;
  }
  this[newKey] = value;
};

queueMethods.dequeue = function () {
  var removeKey = Object.keys(this).shift();
  var removeItem = this[removeKey];
  delete this[removeKey];
  return removeItem;
};

queueMethods.size = function () {
  return Object.keys(this).length;
};
