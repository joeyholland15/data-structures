var BinarySearchTree = function(value) {
  var newSearchTree = Object.create(binarySearchMethods);
  newSearchTree.left = null;
  newSearchTree.right = null;
  newSearchTree.value = value;
  return newSearchTree;
};

binarySearchMethods = {};

binarySearchMethods.insert = function(newValue) {
  function findLocation(node) {
    if(newValue < node.value && node.left === null) {
      node.left = BinarySearchTree(newValue);
    } else if(newValue > node.value && node.right === null) {
      node.right = BinarySearchTree(newValue); 
    } else if(newValue < node.value && node.left !== null) {
      findLocation(node.left);
    } else if(newValue > node.value && node.right !== null) {
      findLocation(node.right);
    }
  };
  findLocation(this); 
}



binarySearchMethods.contains = function(newValue) {
  var status = false; 
  function searchNodes(node) { 
    if(node.value === newValue) {
      status = true;
      return;  
    }
    if(node.left === null && node.right === null) {
      return;
    }
    if(newValue < node.value) {
      searchNodes(node.left)
    } else {
      searchNodes(node.right)
    }
  }
  searchNodes(this); 
  return status;
}

binarySearchMethods.depthFirstLog = function(callback) {
  function execute(node) {
    callback(node.value);
    if(node.left !== null) {
      execute(node.left)
    }
    if(node.right !== null) {
      execute(node.right); 
    }
  }
  execute(this); 
}

binarySearchMethods.breadthFirstLog = function(callback) {
  function execute(node, arr) {
    arr = arr || [];
    callback(node.value); 
    if(node.left !== null) {
      arr.push(node.left); 
    }
    if(node.right !== null) {
      arr.push(node.right);
    }
    //for(var i=0;i<arr.length;i++){
    if(arr.length > 0){
      execute(arr[0], arr.slice(1));
    }
    //}
  }
  execute(this);
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
