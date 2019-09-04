var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  var newKey = parseInt(Object.keys(this).pop()) + 1;
  if (isNaN(newKey)) {
    newKey = 0;
  }
  this[newKey] = value;
};

stackMethods.pop = function () {
  var removeKey = Object.keys(this).pop();
  var removeItem = this[removeKey];
  delete this[removeKey];
  return removeItem;
};

stackMethods.size = function () {
  return Object.keys(this).length;
};
