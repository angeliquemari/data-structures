var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var newKey = parseInt(Object.keys(storage).pop()) + 1;
    if (isNaN(newKey)) {
      newKey = 0;
    }
    storage[newKey] = value;
    someInstance[newKey] = value;
  };

  someInstance.dequeue = function() {
    var removeKey = Object.keys(storage).shift();
    var returnItem = storage[removeKey];
    delete storage[removeKey];
    delete someInstance[removeKey];
    return returnItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
