var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  var newKey = parseInt(Object.keys(this).pop()) + 1;
  if (isNaN(newKey)) {
    newKey = 0;
  }
  this[newKey] = value;
};

Stack.prototype.pop = function() {
  var removeKey = Object.keys(this).pop();
  var removeItem = this[removeKey];
  delete this[removeKey];
  return removeItem;
};

Stack.prototype.size = function() {
  return Object.keys(this).length;
};
