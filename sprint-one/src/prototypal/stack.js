var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.stackSize = 0; 
  stackInstance.storage = {};
  return stackInstance; 
};

var stackMethods = {};

stackMethods.size = function() {
 return this.stackSize; 
}

stackMethods.push = function(value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
  
} 

stackMethods.pop = function() {
  if(this.stackSize > 0) {
    var holder = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--; 
    return holder; 
  }
}


