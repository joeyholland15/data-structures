var Stack = function() {
  var someInstance = {};
  var stackSize = 0; 
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    stackSize++;
    storage[stackSize] = value; 
  };

  someInstance.pop = function() {
    
    if(stackSize > 0) {
      var holder = storage[stackSize];
      
      delete storage[stackSize]; 
      stackSize--;
    };
    return holder; 
  };

  someInstance.size = function() {
    return stackSize; 
  };

  return someInstance;
};
