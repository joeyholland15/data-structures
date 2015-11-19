var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.first = 1;
  queueInstance.last = 1;
  queueInstance.storage = {};

  return queueInstance;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.last - this.first;
};

queueMethods.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function(){
  if((this.last-this.first) >0){
    var holder = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return holder;
  }
}


