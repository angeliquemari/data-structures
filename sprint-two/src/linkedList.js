var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var node = Node(value);
    var key;
    if (list.head === null) {
      key = 0;
      list.head = node;
    } else {
      key = list.tail.next + 1;
      list.tail.next = key;
    }
    list[key] = node;
    list.tail = list[key];
  };

  list.removeHead = function() {
    var oldHeadNode = list.head.value;
    var newHeadPosition = list.head.next;
    list.head = list[newHeadPosition];
    return oldHeadNode;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var endOfList = false;
    while (endOfList === false) {
      if (currentNode.value === target) {
        return true;
      }
      if (currentNode.next === null) {
        endOfList = true;
      } else {
        currentNode = list[currentNode.next.toString()];
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1) because we know where the tail is in order to add the next node.
 * removeHead: O(1) because we know where the head is to remove the first node.
 * contains: O(n) because in the worse case one would have to traverse the whole list
 */
