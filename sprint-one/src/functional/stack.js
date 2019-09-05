var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var newKey = parseInt(Object.keys(storage).pop()) + 1;
    if (isNaN(newKey)) {
      newKey = 0;
    }
    storage[newKey] = value;
  };

  someInstance.pop = function() {
    var removeKey = Object.keys(storage).pop();
    var returnItem = storage[removeKey];
    delete storage[removeKey];
    return returnItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
