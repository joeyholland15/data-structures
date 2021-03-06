var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods); 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);  // fix me
  childTree.parent = this;
};

treeMethods.contains = function(target, node) {
  var node = node || this;
  var status = false;

  if(node.value === target) {
    status = true;
    return status; 
  }
  for(var i = 0; i < node.children.length; i++) {
    if(node.children.length > 0) {
      var childResult = node.contains(target, node.children[i]);
      status = status || childResult;
    }
  };
  return status; 
};

treeMethods.removeFromParent = function(){
  if (this.parent){
    //var parentChildrenArr = this.parent.chidren;
    for(var i=0; i<this.parent.children.length; i++){
      if(this.parent.children[i].value === this.value){
        this.parent.children.splice(i,1);
      }
    }
    this.parent = null;
    return this;
  }
};

treeMethods.traverse = function(callback, node) {
  var node = node || this; 
  callback(node);
  for(var i = 0; i < node.children.length; i++) {
    node.traverse(callback, node.children[i]);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
