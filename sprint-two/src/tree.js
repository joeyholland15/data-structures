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

  if(node.value === target) {
    return true; 
  }
  for(var i = 0; i < node.children.length; i++) {
    if(node.children.length > 0) {
      return node.contains(target, node.children[i]);
    }
  };
  return false; 
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
