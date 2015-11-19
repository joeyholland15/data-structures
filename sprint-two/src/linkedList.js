var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value); 
    if(list.tail) {
      list.tail.next = newNode; 
    }
    list.tail = newNode; 
    if(list.head === null) {
      list.head = newNode; 
    }
  };

  list.removeHead = function() {
    var holder = list.head.value;
    list.head = list.head.next; 
    return holder; 
  };

  list.contains = function(target) {
    for(var key in list) {
      if(list[key].value === target) {
        return true; 
      }
    };
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
 */
