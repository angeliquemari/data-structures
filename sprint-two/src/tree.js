var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var currentValue = this.value;
  if (currentValue === target) {
    return true;
  }

  var hasTarget = false;
  var children = this.children;
  for (var i = 0; i < children.length; i++) {
    var currentChild = children[i];
    hasTarget = hasTarget || currentChild.contains(target);
    if (hasTarget) {
      break;
    }

  }
  return hasTarget;

};



/*
 * Complexity: What is the time complexity of the above functions?
 * contains: O(n) because it has to traverse the entire tree in the worse case scenario
 * addChild: O(1)
 */
