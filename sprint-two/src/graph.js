

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
  var args =fromNode+ ',' +toNode;

  return args in this.edges ? true : false; 
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  var arr1 = [fromNode, toNode];
  var arr2 = [toNode, fromNode];

  this.edges[arr1] = arr1;
  this.edges[arr2] = arr2;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  var key1 = fromNode+ ',' +toNode;
  var key2 = toNode+ ',' +fromNode;
  
  delete this.edges[key1];
  delete this.edges[key2];


};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.nodes){
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


