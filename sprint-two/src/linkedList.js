var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newNode = Node(value);
    if(list.head) {
      list.head.previous = newNode;
    }
    list.head = newNode;
    if(list.tail === null) {
      list.tail = newNode; 
    }
  };

  list.addToTail = function(value) {
    var newNode = Node(value); 
    if(list.tail) {
      list.tail.next = newNode; 
      if(list.head.previous !== null) {
        newNode.previous = list.tail; 
      }
    }
    list.tail = newNode; 
    if(list.head === null) {
      list.head = newNode; 
    }
  };

  list.removeHead = function() {
    var holder = list.head.value;
    list.head = list.head.next; 
    if(list.head !== null) {
      list.head.previous = null; 
    }
    return holder; 
  };

  list.removeTail = function(){
    var holder = list.tail.value;
    list.tail = list.tail.previous;
    if(list.tail !== null){
      list.tail.next = null;
    }
    return holder;
  };

  list.contains = function(target) {
    for(var key in list) {
      if(list[key].value === target) {
        return true; 
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
