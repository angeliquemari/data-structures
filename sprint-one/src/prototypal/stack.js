var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  var newKey = parseInt(Object.keys(this.storage).pop()) + 1;
  if (isNaN(newKey)) {
    newKey = 0;
  }
  this.storage[newKey] = value;
};

stackMethods.pop = function () {
  var removeKey = Object.keys(this.storage).pop();
  var removeItem = this.storage[removeKey];
  delete this.storage[removeKey];
  return removeItem;
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};
