var Queue = function() {
  var someInstance = {};
  var queueSize = 0; 
  // Use an object with numeric keys to store values
  var storage = {};
  var first = 1; 
  var last = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
    queueSize = last - first; 
  };

  someInstance.dequeue = function() {

    if(queueSize > 0) {
      queueSize = last - first; 
      var holder = storage[first]; 
      delete storage[first];
      first++;
      queueSize = last - first; 
      return holder; 
    }
  };

  someInstance.size = function() {
    return last - first; 
  };

  return someInstance;
};
