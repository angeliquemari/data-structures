

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageItem = this._storage.get(index);
  if (storageItem === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var alreadyExists = false;
    for (var i = 0; i < storageItem.length; i++) {
      if (storageItem[i][0] === k) {
        storageItem[i][1] = v;
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      storageItem.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageItem = this._storage.get(index);
  for (var i = 0; i < storageItem.length; i++) {
    if (storageItem[i][0] === k) {
      return storageItem[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageItem = this._storage.get(index);
  for (var i = 0; i < storageItem.length; i++) {
    if (storageItem[i][0] === k) {
      storageItem.splice(i, 1);
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: O(n) in the absolute worst case - if your hashing funciton isn't very good and most items hash to the same index. But generally you would think O(1) because if you have values that collide it's probably very few relative to your total number of stored values.
retrieve: same as insert
remove: same as retrieve
 */


