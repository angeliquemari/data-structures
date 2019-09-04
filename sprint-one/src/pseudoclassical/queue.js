var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  var newKey = parseInt(Object.keys(this).pop()) + 1;
  if (isNaN(newKey)) {
    newKey = 0;
  }
  this[newKey] = value;
};

Queue.prototype.dequeue = function() {
  var removeKey = Object.keys(this).shift();
  var removeItem = this[removeKey];
  delete this[removeKey];
  return removeItem;
};

Queue.prototype.size = function() {
  return Object.keys(this).length;
};
