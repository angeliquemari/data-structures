

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.connectedNodes = [];
  this.storage[node] = newNode;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for (var key in this.storage) {
    if (this.storage[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var currentNode = this.storage[node];
  var connectedNodes = currentNode.connectedNodes;

  for (var i = 0; i < connectedNodes.length; i++) {
    this.removeEdge(node, connectedNodes[i]);
  }

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].connectedNodes.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].connectedNodes.push(toNode);
  this.storage[toNode].connectedNodes.push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeConnectedNodes = this.storage[fromNode].connectedNodes;
  var fromNodeSpliceIndex = fromNodeConnectedNodes.indexOf(toNode);
  fromNodeConnectedNodes.splice(fromNodeSpliceIndex, 1);

  var toNodeConnectedNodes = this.storage[toNode].connectedNodes;
  var toNodeSpliceIndex = toNodeConnectedNodes.indexOf(fromNode);
  toNodeConnectedNodes.splice(toNodeSpliceIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.storage) {
    cb(this.storage[key].value);
  }
};

// Added function
Graph.prototype.countOfEdges = function(node) {
  return this.storage[node].connectedNodes.length;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode = O(1)
 * contains = O(n)
 * removeNode = O(n) because in the worse case, if the node you're removing is connected to every node, then you would have to remove every connection from every node
 * hasEdge = O(n) because in the worse case a node has an edge with every other node in the graph
 * addEdge = O(1)
 * removeEdge = O(1)
 * forEachNode = O(n)
 */