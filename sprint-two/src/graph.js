

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {}
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node; 
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var key in this.nodes) {
    if( this.nodes[key] === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var args = JSON.stringify(arguments);
  //var edgeArr = Array.prototype.slice.call(arguments);
  //var contains = false;

  return args in this.edges ? true : false; 
  //return contains;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var args = JSON.stringify(arguments);
  var edgeArr = Array.prototype.slice.call(arguments);
  var edgeArrReverse = edgeArr.slice().reverse();
  this.edges[args] = edgeArr;
  this.edges[JSON.stringify(edgeArrReverse)] = edgeArrReverse;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var args = JSON.stringify(arguments);
  var edgeArr = Array.prototype.slice.call(arguments);
  var edgeArrReverse = edgeArr.slice().reverse();
  delete this.edges[args];
  delete this.edges[JSON.stringify(edgeArrReverse)];

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


