var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods); 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);  // fix me
};

treeMethods.contains = function(target) {
  var status = false; 
  function searchChildren(node) {
    if(node.value === target) {
      status = true;
    }
    for(var i = 0; i < node.children.length; i++) {
      if(node.children.length > 0) {
        searchChildren(node.children[i]);
      }
    };
  };
  searchChildren(this);
  return status; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
