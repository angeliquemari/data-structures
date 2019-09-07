var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counterLowerLimit = 0;
  var counterUpperLimit = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counterUpperLimit] = value;
    counterUpperLimit++;
  };

  someInstance.dequeue = function() {
    if (counterUpperLimit - counterLowerLimit > 0) {
      var returnItem = storage[counterLowerLimit];
      delete storage[counterLowerLimit];
      counterLowerLimit++;
      return returnItem;
    }
  };

  someInstance.size = function() {
    return counterUpperLimit - counterLowerLimit;
  };

  return someInstance;
};
