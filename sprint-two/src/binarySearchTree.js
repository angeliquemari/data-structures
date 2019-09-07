var BinarySearchTree = function(value) {
  var bST = Object.create(BinarySearchTree.methods);
  bST.value = value;
  bST.left = undefined;
  bST.right = undefined;
  return bST;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
  var newBST = new BinarySearchTree(value);

  var direction;
  if (newBST.value < this.value) {
    direction = 'left';
  } else if (newBST.value > this.value) {
    direction = 'right';
  } else {
    return new Error('input value already in tree');
  }

  if (this[direction] === undefined) {
    this[direction] = newBST;
  } else {
    this[direction].insert(value);
  }

};

BinarySearchTree.methods.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  var direction;
  if (value < this.value) {
    direction = 'left';
  } else {
    direction = 'right';
  }

  if (this[direction] === undefined) {
    return false;
  }

  var hasTarget = false;
  hasTarget = hasTarget || this[direction].contains(value);
  return hasTarget;
};

BinarySearchTree.methods.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(n) - worse case if you never rebalance and all of the nodes are very skewed, then you may need to go through all the nodes to insert a given node. But on average O(log n)
 contains: similar to insert above
 depthFirstLog: O(n)
 */
