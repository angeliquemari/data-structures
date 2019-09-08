var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    var currentTailNode = list.tail;
    var newNodeKey;
    if (currentTailNode === null) {
      newNodeKey = 0;
      newNode.previous = -1;
      newNode.next = 1;
      list.head = newNode;
    } else {
      newNodeKey = currentTailNode.next;
      newNode.previous = newNodeKey - 1;
      newNode.next = newNodeKey + 1;
    }
    list[newNodeKey] = newNode;
    list.tail = newNode;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    var currentHeadNode = list.head;
    var newNodeKey;
    if (currentHeadNode === null) {
      newNodeKey = 0;
      newNode.previous = -1;
      newNode.next = 1;
      list.tail = newNode;
    } else {
      newNodeKey = currentHeadNode.previous;
      newNode.next = newNodeKey + 1;
      newNode.previous = newNodeKey - 1;
    }
    list.head = newNode;
    list[newNodeKey] = newNode;
  };

  list.removeTail = function() {
    var currentTailNode = list.tail;
    var previousNode = list[currentTailNode.previous];
    var returnValue = currentTailNode.value;
    delete list[currentTailNode.next - 1];
    if (list.tail.next === list.head.next) {
      list.head = null;
      list.tail = null;
    } else {
      list.tail = previousNode;
    }
    return returnValue;
  };

  list.removeHead = function() {
    var currentHeadNode = list.head;
    var nextNode = list[currentHeadNode.next];
    var returnValue = currentHeadNode.value;
    delete list[currentHeadNode.previous + 1];
    if (list.tail.next === list.head.next) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = nextNode;
    }
    return returnValue;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var endOfList = false;
    while (endOfList === false) {
      if (currentNode.value === target) {
        return true;
      }
      if (currentNode.next === list.tail.next) {
        endOfList = true;
      } else {
        currentNode = list[currentNode.next];
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
  node.previous = null;

  return node;
};

